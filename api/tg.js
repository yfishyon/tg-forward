export default async function handler(req, res) {
  const match = req.url.match(/^\/bot\/([^\/]+)\/(.+)$/);

  if (!match) {
    return res.status(400).json({ error: 'Usage: /bot/<token>/<method>' });
  }

  const [, token, method] = match;
  const url = `https://api.telegram.org/bot${token}/${method}`;

  try {
    const tg_res = await fetch(url, {
      method: req.method,
      headers: {
        'Content-Type': req.headers['content-type'] || 'application/json'
      },
      body: ['POST', 'PUT', 'PATCH'].includes(req.method)
        ? await req.text()
        : undefined
    });

    const body = await tg_res.text();
    res.status(tg_res.status);
    res.setHeader('Content-Type', tg_res.headers.get('content-type') || 'text/plain');
    res.send(body);
  } catch (e) {
    res.status(500).json({ error: 'proxy failed', detail: e.message });
  }
}
