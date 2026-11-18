# Dr. Md. Ashikur Rahman Shuvo — Official Medical Website

Bilingual (**Bengali default + English**) static medical website built with React, Vite, TypeScript, Tailwind CSS, Framer Motion (`motion/react`), React Router, and React Helmet Async for **Ashik Orthopedic, Sports Injury & Pain Clinic** (Wari, Dhaka).

## 1. Local Development Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

To run a TypeScript check and build:

```bash
npm run lint
npm run build
```

## 2. Updating Verified Doctor Content

All doctor and clinic configuration lives in `src/config/siteConfig.ts` and `src/data/`:

- **Doctor Portrait**: Place the client's verified portrait photo at `public/images/doctor-portrait.webp` and set `VITE_DOCTOR_PORTRAIT_URL="/images/doctor-portrait.webp"` (or set `doctorPortraitUrl` in `src/config/siteConfig.ts`).
- **Academic Qualifications & Experience**: Update `qualifications`, `experiencePlaceholder`, and `affiliationsPlaceholder` in `src/config/siteConfig.ts` with verified credentials only.
- **Publications / Journals**: Add verified entries to `src/data/journals.ts`.
- **Treatments & Blogs**: Edit `src/data/treatmentsKneeShoulder.ts`, `src/data/treatmentsSpineGeneral.ts`, `src/data/blogsPart1.ts`, and `src/data/blogsPart2.ts`. All medical copy should be reviewed and approved by the doctor prior to publication.
- **WhatsApp Button**: Set `VITE_WHATSAPP_NUMBER="8801671751612"` in `.env` only if that number is actively monitored on WhatsApp.

## 3. cPanel (`public_html`) Deployment Guide

This project builds into a 100% static website (`dist/`) that requires **no permanently running Node.js server**.

### Step A: Configure Environment Variables (Optional)

Create a `.env` file in the project root from `.env.example`:

```env
VITE_SITE_URL="https://yourdomain.com"
VITE_BASE_PATH="/"
VITE_CONTACT_ENDPOINT="./contact.php"
VITE_DOCTOR_PORTRAIT_URL="/images/doctor-portrait.webp"
```

- If deploying to a **subdirectory** (e.g., `https://yourdomain.com/clinic/`), set `VITE_BASE_PATH="/clinic/"` and update `VITE_DOCTOR_PORTRAIT_URL="/clinic/images/doctor-portrait.webp"`.

### Step B: Configure Email Recipient for Contact Form

Open `public/contact.php` and update:
```php
$recipientEmail = 'appointments@yourdomain.com';
$fromEmail = 'noreply@yourdomain.com';
```
*(Alternatively, leave `contact.php` unused and set `VITE_CONTACT_ENDPOINT` to a Formspree or Web3Forms endpoint.)*

### Step C: Generate the Production Build

```bash
npm run build
```

This creates the `dist/` folder containing:
- `index.html`
- `assets/` (hashed CSS, JS, and bundled WebP/JPG images)
- `.htaccess` (copied automatically from `public/.htaccess`)
- `contact.php`, `robots.txt`, `sitemap.xml`

### Step D: Upload to cPanel

1. Log in to **cPanel** and open **File Manager**.
2. Navigate to `public_html/` (or your target subdirectory, e.g., `public_html/clinic/`).
3. Compress the **contents inside `dist/`** (not the `dist` folder itself) into a `.zip` file, upload it, and click **Extract**.
4. Ensure hidden files are visible in File Manager (**Settings → Show Hidden Files**) and confirm `.htaccess` is present in `public_html/`.
5. Update `robots.txt` and `sitemap.xml` URLs if your live domain differs from the default.
6. Test direct navigation to sub-routes (e.g., `https://yourdomain.com/treatments/acl-injury` and `https://yourdomain.com/blogs/frozen-shoulder-symptoms-causes-treatment`) and reload the browser to confirm `.htaccess` fallback works cleanly.
