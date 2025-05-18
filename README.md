# tg-forward-vercel

这是一个基于 Vercel 部署的 Telegram Bot API 代理服务，方便你通过统一接口访问 Telegram Bot API。

---

## 功能

- 代理转发 Telegram Bot API 请求
- 支持 GET、POST 等多种请求方法
- 简化直接调用 Telegram API 的复杂度

---

## 使用方法

### 请求格式

```

https://tg-fw.loli.bj/bot/<BOT_TOKEN>/<METHOD>

````

- `<BOT_TOKEN>`：你的 Telegram Bot Token，例如 `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`
- `<METHOD>`：Telegram Bot API 的方法名，例如 `sendMessage`、`getUpdates`

## 注意事项

* 请替换 `<BOT_TOKEN>` 为你自己的 Telegram Bot Token
* 代理请求时，请确保你的请求格式和 Telegram Bot API 要求一致
* 本服务只作为转发代理，不保存任何请求数据

---

## 部署

本项目已部署在 [Vercel](https://vercel.com/)，你也可以 fork 本仓库，自行部署。
部署地址: https://tg-forward-mtydfnls-projects.vercel.app
国内直链: https://tg-fw.loli.bj

---

## 联系

如有问题，请提交 issue 或联系开发者。
