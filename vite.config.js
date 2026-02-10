import { defineConfig, loadEnv } from 'vite'
import https from 'https'
import react from '@vitejs/plugin-react'

function httpsPost(url, body, apiKey) {
  return new Promise((resolve, reject) => {
    const u = new URL(url)
    const data = JSON.stringify(body)
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
          'Content-Length': Buffer.byteLength(data),
        },
      },
      (res) => {
        let chunks = ''
        res.on('data', (c) => { chunks += c })
        res.on('end', () => {
          try {
            resolve({ ok: res.statusCode >= 200 && res.statusCode < 300, status: res.statusCode, data: JSON.parse(chunks || '{}') })
          } catch {
            resolve({ ok: false, status: res.statusCode, data: {} })
          }
        })
      }
    )
    req.on('error', reject)
    req.write(data)
    req.end()
  })
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    {
      name: 'resend-email-api',
      configureServer(server) {
        const env = loadEnv(mode, process.cwd(), '')
        const apiKey = env.RESEND_API_KEY || env.VITE_RESEND_API_KEY

        server.middlewares.use(async (req, res, next) => {
          if (req.url !== '/api/send-email' || req.method !== 'POST') {
            return next()
          }

          let body = ''
          req.on('data', (chunk) => { body += chunk })
          req.on('end', async () => {
            res.setHeader('Content-Type', 'application/json')
            if (!apiKey) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: 'RESEND_API_KEY or VITE_RESEND_API_KEY is not set in .env' }))
              return
            }

            try {
              const { name, email, message } = JSON.parse(body || '{}')
              if (!name || !email || !message) {
                res.statusCode = 400
                res.end(JSON.stringify({ error: 'Missing name, email, or message' }))
                return
              }

              const escapeHtml = (t) => String(t ?? '')
                .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
              const html = `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`

              const payload = {
                from: 'onboarding@resend.dev',
                to: 'irfanshehzadsandhu@gmail.com',
                reply_to: email,
                subject: `Portfolio contact from ${name}`,
                html,
              }
              const { ok, status, data } = await httpsPost('https://api.resend.com/emails', payload, apiKey)

              if (!ok) {
                res.statusCode = status
                res.end(JSON.stringify({ error: data.message || data.detail || 'Resend API error' }))
                return
              }
              res.statusCode = 200
              res.end(JSON.stringify({ success: true }))
            } catch (err) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: err.message || 'Server error' }))
            }
          })
        })
      },
    },
  ],
}))
