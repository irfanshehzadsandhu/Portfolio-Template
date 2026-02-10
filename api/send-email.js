import https from "https";

const RESEND_URL = "https://api.resend.com/emails";
const TO_EMAIL = "irfanshehzadsandhu@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function httpsPost(url, body, apiKey) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const data = JSON.stringify(body);
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "Content-Length": Buffer.byteLength(data),
        },
      },
      (res) => {
        let chunks = "";
        res.on("data", (c) => {
          chunks += c;
        });
        res.on("end", () => {
          try {
            resolve({
              ok: res.statusCode >= 200 && res.statusCode < 300,
              status: res.statusCode,
              data: JSON.parse(chunks || "{}"),
            });
          } catch {
            resolve({ ok: false, status: res.statusCode, data: {} });
          }
        });
      }
    );
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "RESEND_API_KEY or VITE_RESEND_API_KEY is not set" });
    return;
  }

  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      res.status(400).json({ error: "Missing name, email, or message" });
      return;
    }

    const html = [
      `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>`,
      "<p><strong>Message:</strong></p>",
      `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    ].join("");

    const payload = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      html,
    };
    const { ok, status, data } = await httpsPost(RESEND_URL, payload, apiKey);

    if (!ok) {
      res.status(status).json({
        error: data.message || data.detail || "Resend API error",
      });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message || "Server error" });
  }
}
