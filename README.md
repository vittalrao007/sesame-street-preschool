# Sesame Street Preschool Website

A client-ready, responsive, and customizable website built for preschools and daycare centers in India. Designed with a calming pastel aesthetic, conversion-oriented communication, direct Principal contact actions (Call & WhatsApp), and a built-in on-screen website configuration drawer.

---

## 🌟 Key Features

1. **Warm Pastel Visual Identity**:
   - Designed with a palette consisting of Warm Cream (`#FFF9F3`), Mint Green (`#DDF4E7`), Butter Yellow (`#FFE8A3`), Powder Blue (`#DDEFFD`), Soft Pink (`#FBE5E7`), Lavender (`#EAE3FA`), and Deep Slate Navy (`#203047`).
   - Clean card corner radii, generous whitespace, and zero-pill typography.

2. **On-Screen "Configure Website" Panel (Bottom-Left)**:
   - A floating settings button allows business owners and demo presenters to adjust the preschool's name, tagline, phone numbers, WhatsApp message, address, PIN code, timings, and offerings in real time.
   - Updates all headings, badges, contact links, and footer details instantly without requiring page refreshes.

3. **Working Call & WhatsApp Actions**:
   - **Call the Principal**: Direct `tel:` links using the configured phone number.
   - **WhatsApp the Principal**: Formatted `https://wa.me/<digits>` links with sanitized country code and prefilled greeting.
   - Available in the header, hero section, quick mobile action bar, admissions section, and footer.

4. **Comprehensive Section Structure**:
   - **Hero Section**: Value proposition with authentic classroom photography, floating trust badges ("Play-Based Learning", "Caring Educators"), and three primary CTAs.
   - **About Us**: Child-centered philosophy, gentle guidance, and curiosity-driven pillars.
   - **Programs Grid**: Playgroup, Nursery, LKG, UKG, and Daycare cards with timings, age eligibility, and 1-click enquiry triggers.
   - **Daycare & Extended Care**: Detailed routines, nap areas, meal support, hygienic supervision, and parent updates.
   - **Campus Facilities**: Infrastructure cards with icon representations.
   - **Why Choose Us**: 6 verified feature cards without exaggerated buzzwords.
   - **Daily Routine**: Illustrative step-by-step daily schedule.
   - **Photo Gallery**: Real high-resolution classroom images, category filtering, and an accessible photo lightbox.
   - **Admissions 2026–27**: Step-by-step enrollment roadmap and document checklist.
   - **Frequently Asked Questions**: Accessible accordion answering age eligibility, food, visits, and safety.
   - **Contact & Map**: Address details, business hours, and an interactive visit booking form with direct WhatsApp forwarding.

5. **Deployment-Safe Image Handling**:
   - Uses locally bundled, production-tested images located in `/public/images/`.
   - Includes graceful CSS/SVG fallback containers so zero broken image borders ever appear.

---

## ⚙️ Configuration Storage & Limitations

- **Browser-Local Storage**: Customized settings saved via the "Configure Website" button are stored in the current browser's `localStorage`.
- **Limitation**: Changes made in one browser/device are saved locally for client demonstrations and previewing. They do not automatically sync across all other visitors' browsers or devices.
- **Production Backend Readiness**: To provide multi-user shared persistence across the web, the state management layer (`src/context/BusinessConfigContext.tsx`) can be connected to a headless CMS or database (e.g. Supabase, Firebase, or PostgreSQL).

---

## 🚀 Running Locally

### Prerequisites
- Node.js 22.12 or newer
- npm or yarn

### Installation & Startup
```bash
# Install dependencies
npm ci

# Start local development server
npm run dev
```
The application will start on `http://localhost:3000`.

### Type Checking & Production Build
```bash
# Run TypeScript validation
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚢 Deploying to Vercel

This repository is configured for deployment to **Vercel**:

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import this repository.
4. Keep the project root as the **Root Directory**. Vercel uses `vercel.json` to configure the Vite framework, `npm run build`, and the `dist` output directory. The rewrite in that file also supports direct visits to app routes.
5. No Vercel environment variables are required for the current app.
6. Click **"Deploy"**. Vercel will build the project and provide a secure HTTPS domain. Future pushes to the connected Git branch will trigger new deployments.
