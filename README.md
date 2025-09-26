# LocalBizLabs – Get Your Business Online Fast & Affordable

This is the official website for [LocalBizLabs](https://localbizlabs.com), built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Framer Motion](https://www.framer.com/motion/).  
LocalBizLabs helps local businesses launch a professional online presence quickly and affordably, with smart websites, booking tools, Google Maps integration, branding, and more.

**Note:** This is a private company project and not intended for open source contributions.

---

## Features

- ⚡ **Fast, responsive landing page**
- 🎨 **Premium white theme with modern UI**
- 🖋️ **Geist and Inter fonts via `next/font`**
- 🎬 **Smooth animations using Framer Motion**
- 📱 **Mobile-optimized and SEO-ready**
- 🛠️ **Easy customization with Tailwind CSS**
- 📧 **Contact form with email integration via Resend**
- 🔒 **Security features: Rate limiting and Helmet for protection**
- 📊 **Analytics integration with Vercel Analytics**
- 🚀 **Optimized performance with dynamic imports**

---

## Tech Stack

- **Framework:** Next.js 15.3.2 (App Router)
- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion 12.15.0
- **Email Service:** Resend
- **Analytics:** Vercel Analytics
- **Security:** Helmet, Express Rate Limit
- **Deployment:** Vercel (recommended)

---

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

First, clone the repository and install dependencies:

```bash
git clone https://github.com/vineet-codes256/LocalBiz-Labs-Page.git
cd LocalBiz-Labs-Page
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Environment Setup

Create a `.env.local` file in the root directory and add your Resend API key:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

You can obtain an API key from [Resend](https://resend.com/dashboard/api-keys).

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build and Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # API endpoint for contact form
│   ├── favicon.ico
│   ├── globals.css               # Global styles and Tailwind
│   ├── layout.tsx                # Root layout with metadata and fonts
│   └── page.tsx                  # Main landing page
└── components/
    ├── About.tsx                 # About section
    ├── CaseStudies.tsx           # Case studies showcase
    ├── Contact.tsx               # Contact form component
    ├── FAQ.tsx                   # Frequently asked questions
    ├── Footer.tsx                # Site footer
    ├── Header.tsx                # Navigation header
    ├── Hero.tsx                  # Hero section
    ├── Pricing.tsx               # Pricing plans
    ├── ReferralBanner.tsx        # Referral program banner
    ├── Services.tsx              # Services offered
    ├── Transformations.tsx       # Business transformation stories
    └── WhyChooseUs.tsx           # Why choose LocalBizLabs
public/
├── images/                      # Static images
│   ├── testimonials/            # Testimonial images
│   └── transformations/         # Transformation images
├── og-image.png                 # Open Graph image
├── logo.png                     # Company logo
└── ...                          # Other static assets
```

---

## API Endpoints

### POST /api/contact

Handles contact form submissions. Expects JSON payload with:

- `name`: User's name
- `phone`: Phone number
- `businessType`: Type of business
- `email`: Email address
- `message`: Message content

Sends an email to `hello@localbizlabs.com` using Resend.

**Rate Limiting:** 1 submission per minute per user.

---

## Customization

- **Edit content:** Update components in `src/components/` for different sections.
- **Change branding:** Adjust metadata, fonts, and colors in `src/app/layout.tsx` and `globals.css`.
- **Styling:** Modify Tailwind classes or add custom CSS.
- **Email templates:** Customize the HTML in `src/app/api/contact/route.js`.

---

## Deployment

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Vercel Deployment Steps

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
3. Deploy

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Resend Documentation](https://resend.com/docs)

---

© 2025 LOCALBIZLABS.com — A brand of Rawat Innovations Pvt. Ltd. | CIN: U62011UT2025PTC019256 | All rights reserved.
