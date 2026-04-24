# Yingchen Liu Website

This is a Next.js portfolio site deployed on Vercel.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Firebase setup

The site includes a dedicated `/login` page for Google sign-in.

Create a `.env.local` file from `.env.example`:

```bash
cp .env.example .env.local
```

Then fill in the Firebase web app config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

In the Firebase console for `yingchen-website`:

1. Create a Web app and copy its config into `.env.local`.
2. Enable Google under Authentication > Sign-in method.
3. Add these authorized domains if they are not already present:
   - `localhost`
   - `yingchenliu.com`
   - `www.yingchenliu.com`

Image upload is intentionally not wired into the UI yet.

## Build

```bash
npm run build
```
