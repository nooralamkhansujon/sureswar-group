# Sureswar Travels

Static Next.js site (`output: "export"` in `next.config.ts`) — no backend server. The contact form (`components/contact-form.tsx`) sends inquiries directly from the browser via [EmailJS](https://www.emailjs.com).

## Contact form email setup

### 1. EmailJS account

1. Create a free account at [emailjs.com](https://www.emailjs.com) and add an **Email Service** (Gmail, Outlook, SMTP, etc.) — note the **Service ID**.
2. Create an **Email Template** — note the **Template ID**.
3. Get your **Public Key** from **Account → General**.

### 2. Template configuration

**To Email** field (right panel): `{{to_email}}`

**Content** (left panel) must reference every field the form sends, or it silently won't show up in the email:

```
{{name}}
{{time}}

Phone: {{phone}}
Email: {{email}}
Service: {{service}}

{{message}}
```

**Subject** — the default template subject uses `{{title}}`, which this form never sends. Either change it to something static (e.g. `New inquiry — {{service}}`) or it will render blank.

The `service` value sent is already the human-readable label (e.g. "Air ticket booking"), not the raw slug — see `SERVICE_LABELS` in `components/contact-form.tsx`.

### 3. Environment variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_CONTACT_EMAIL=
```

`NEXT_PUBLIC_CONTACT_EMAIL` is the destination inbox for inquiries.

> `NEXT_PUBLIC_*` variables are inlined into the JS bundle at `next build` time — changing them requires a rebuild, not just a server restart.

### 4. Production checklist

- **Set env vars on the build host** (Vercel/Netlify/CI), not just locally — the build step needs them, and this is a static export so there's no server to read `.env.local` at runtime.
- **Restrict the EmailJS public key to your domain.** It ships inside the public JS bundle by design. In the EmailJS dashboard go to **Account → Security** and whitelist your production domain, otherwise anyone can call your service from another site using the key visible in your page source.
- **Check the plan quota.** The free tier is capped (e.g. 200 requests/month) — see the counter in the EmailJS dashboard header. Upgrade if expected inquiry volume exceeds it.
- **Add spam protection.** There is no backend to rate-limit submissions. Use a honeypot field or enable EmailJS's built-in reCAPTCHA (Template → Settings) before going live.
- **Rebuild and redeploy** after any env var or template change: `yarn build:sureswar-travels`, then deploy the generated `out/` directory to your static host.

## Development

```bash
yarn dev:sureswar-travels   # http://localhost:3002
yarn build:sureswar-travels # outputs static site to out/
```
