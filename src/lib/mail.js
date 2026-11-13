import nodemailer from "nodemailer";
import { SITE } from "@/lib/site";

let transporter;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return transporter;
}

export function getReceiverEmails() {
  return (process.env.CONTACT_RECEIVER_EMAILS || process.env.SMTP_USER || "")
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const BRAND = "#5b21b6";
const TEXT_DARK = "#14111f";
const TEXT_MUTED = "#5f5a6e";
const BORDER = "#e6e1ef";

// Tabellbaserad layout med inline-stilar – fungerar i Outlook, Gmail och Apple Mail.
export function renderEmailLayout({ preheader = "", heading, bodyHtml }) {
  return `<!DOCTYPE html>
<html lang="sv"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>${escapeHtml(SITE.name)}</title></head>
<body style="margin:0;padding:0;background:#f5f8f8;font-family:Arial,Helvetica,sans-serif;">
<span style="display:none;font-size:1px;color:#f5f8f8;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${escapeHtml(preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f8f8;padding:32px 16px;"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${BORDER};">
<tr><td style="background:${BRAND};padding:28px 40px;"><span style="font-size:20px;font-weight:800;color:#ffffff;">${escapeHtml(SITE.name)}</span></td></tr>
<tr><td style="padding:40px;"><h1 style="margin:0 0 20px;font-size:22px;font-weight:800;color:${TEXT_DARK};">${escapeHtml(heading)}</h1>
<div style="font-size:15px;line-height:1.7;color:${TEXT_MUTED};">${bodyHtml}</div></td></tr>
<tr><td style="padding:24px 40px;background:#f7f9fa;border-top:1px solid ${BORDER};">
<p style="margin:0;font-size:12.5px;color:#9aa8ab;">${escapeHtml(SITE.legalName)} &middot; ${escapeHtml(SITE.email)}</p>
<p style="margin:6px 0 0;font-size:12.5px;"><a href="${SITE.url}" style="color:${BRAND};text-decoration:none;">${escapeHtml(SITE.url.replace(/^https?:\/\//, ""))}</a></p>
</td></tr></table></td></tr></table></body></html>`;
}

export function renderDetailRows(rows) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BORDER};border-radius:12px;overflow:hidden;">${rows
    .map(([label, value], i) => {
      const bg = i % 2 === 0 ? "#f7f9fa" : "#ffffff";
      const bb = i < rows.length - 1 ? `1px solid ${BORDER}` : "none";
      return `<tr><td style="padding:12px 16px;background:${bg};font-size:13px;font-weight:700;color:${TEXT_DARK};width:170px;vertical-align:top;border-bottom:${bb};">${escapeHtml(label)}</td><td style="padding:12px 16px;background:${bg};font-size:14px;color:${TEXT_MUTED};vertical-align:top;border-bottom:${bb};">${value}</td></tr>`;
    })
    .join("")}</table>`;
}

export async function sendMail({ to, subject, html, replyTo }) {
  const from = process.env.SMTP_FROM || `"${SITE.name}" <${process.env.SMTP_USER}>`;
  return getTransporter().sendMail({ from, to, replyTo, subject, html });
}
