export default async function handler(req, res) {
  const match = req.url.match(/^\/bot\/([^\/]+)\/([^?\/]+)(\?.*)?$/);

  if (!match) {
    return res.status(400).json({ error: 'Usage: /bot/<token>/<method>' });
  }

  const [, token, method, query = ''] = match;

  if (!/^[0-9]+:[\w-]{35,}$/.test(token)) {
    return res.status(400).json({ error: 'Invalid bot token format' });
  }

  const allowed = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
  if (!allowed.includes(req.method)) {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const url = `https://api.telegram.org/bot${token}/${method}${query}`;

  try {
    const body =
      ['POST', 'PUT', 'PATCH'].includes(req.method)
        ? await req.text()
        : undefined;

    const tg_res = await fetch(url, {
      method: req.method,
      headers: {
        'Content-Type': req.headers['content-type'] || 'application/json'
      },
      body
    });

    const responseText = await tg_res.text();
    res.status(tg_res.status);
    res.setHeader('Content-Type', tg_res.headers.get('content-type') || 'text/plain');
    res.send(responseText);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      error: 'proxy failed',
      detail: e.message || String(e)
    });
  }
}