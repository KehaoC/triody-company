# Triody — 10x Your Business with Agents

Static site built with Next.js, deployed on a VPS via GitHub Actions CI/CD.

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Styling**: CSS Modules (`src/app/globals.css`)
- **Deploy**: Nginx static file serving on Ubuntu VPS
- **CI/CD**: GitHub Actions (push → build → rsync deploy)

## Development Workflow

```
main  ── production (https://triody.ink)
dev   ── staging    (https://dev.triody.ink)
```

1. Do all work on `dev` branch
2. Push to `dev` → GitHub Actions auto-deploys to https://dev.triody.ink
3. Verify on dev, then merge `dev` into `main`
4. Push to `main` → GitHub Actions auto-deploys to https://triody.ink

## Server

- **IP**: 137.175.102.141
- **SSH**: `ssh -i ~/CodeSpace/tokenx/id_rsa.pem -p 50815 root@137.175.102.141`
- **Web root (prod)**: `/var/www/triody.ink`
- **Web root (dev)**: `/var/www/dev.triody.ink`
- **Nginx configs**: `/etc/nginx/sites-available/triody.ink` and `dev.triody.ink`
- **SSL**: Let's Encrypt via certbot, auto-renew

## Adding Content

- **Services**: edit `src/content/services.ts` — each entry has `slug`, `title`, `description`, `body[]`
- **Cases**: edit `src/content/cases.ts` — each entry has `slug`, `title`, `description`, `industry`, `body[]`
- New entries automatically get their own page at `/service/<slug>` or `/case/<slug>`

## Static Export Notes

- `images: { unoptimized: true }` is required — static export has no image optimization server
- All dynamic routes must have `generateStaticParams()` (already done for cases and services)
- Build output goes to `out/`, served directly by nginx

## Useful Commands

```bash
# Local dev
npm run dev

# Build for production
npm run build

# Manual deploy (if CI/CD is down)
rsync -rlgoDz --delete -e "ssh -i ~/CodeSpace/tokenx/id_rsa.pem -p 50815" out/ root@137.175.102.141:/var/www/dev.triody.ink/

# Check CI/CD status
gh run list --repo KehaoC/triody-company --workflow=deploy.yml --limit=5
```
