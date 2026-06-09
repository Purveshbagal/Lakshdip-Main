# Lakshdip Computer Institute — Official Website

> **Tagline:** A Step Towards Digital Future...

Official website for **Lakshdip Computer Institute**, located at Miri Road, Near Santoshi Mata Mandir, Shashrinagar, Shevgaon. We offer government-certified computer and typing courses with 20+ years of experience and 10,000+ successful students.

---

## Live Website

**[lakshdipcomputer.com](https://lakshdipcomputer.com)**

---

## Features

- **Home** — Hero slider, stats counters, courses overview, notice board, news gallery
- **About Us** — Chairman, founder, president, instructors & leadership team info
- **Courses** — Typing, Shorthand, CCC, Tally Prime, Advanced Excel, Computer Basics
- **Admission** — Online admission form with MongoDB storage
- **Results** — GCC-TBC & CCC exam results
- **Gallery** — Photo gallery grid
- **Notices** — Notice board with live MSCE Pune exam notices
- **Downloads** — Download center for study material
- **Contact Us** — Contact form & institute location details
- **Student Login** — Student portal login
- **Online Test** — Online exam portal
- **Admin Panel** — JWT-secured admin dashboard
- **Multilingual** — English / Marathi language toggle
- **WhatsApp Chat** — Floating WhatsApp support button

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Slider | Swiper.js |
| Icons | React Icons |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |
| HTTP | Axios |
| Deployment | Vercel |

---

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home page
│   ├── about/            # About Us
│   ├── admin/            # Admin panel
│   ├── admission/        # Online admission
│   ├── blog/             # Blog
│   ├── contact/          # Contact
│   ├── courses/          # Courses listing
│   ├── downloads/        # Download center
│   ├── gallery/          # Photo gallery
│   ├── notices/          # Notice board
│   ├── online-test/      # Online test portal
│   ├── results/          # Exam results
│   └── student-login/    # Student login
├── components/           # Reusable UI components
├── lib/                  # MongoDB connection, site data, translations
├── models/               # Mongoose models (Admission, Course, Notice, User)
├── public/               # Static assets (images, favicon, sitemap)
└── scripts/              # Database seed script
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or MongoDB Atlas)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Purveshbagal/Lakshdip-Main.git
cd Lakshdip-Main

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your values (see Environment Variables section below)

# 4. Seed the database with sample data (optional)
npm run seed

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```env
MONGODB_URI=mongodb://localhost:27017/lakshdip   # MongoDB connection string
JWT_SECRET=replace_this_with_strong_secret       # Secret for JWT signing
ADMIN_EMAIL=admin@lakshdip.local                 # Admin login email
ADMIN_PASSWORD=admin123                          # Admin login password
```

For production, use a strong `JWT_SECRET` and a MongoDB Atlas URI.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run seed` | Seed MongoDB with sample data |

---

## Courses Offered

| Course | Description |
|---|---|
| **Typing** | English, Marathi, Hindi — GCC-TBC exam preparation |
| **Shorthand** | Speed writing in English & Marathi, government job oriented |
| **CCC** | Course on Computer Concepts — fundamental knowledge for all |
| **Tally Prime** | Accounting, GST, inventory & payroll management |
| **Advanced Excel** | MIS Reports, Dashboards, VLOOKUP, Pivot Tables, Data Analysis |
| **Computer Basics** | Windows, Internet, Email — fundamentals for all age groups |

---

## Deployment

This project is **Vercel-ready**. To deploy:

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Set the environment variables in Vercel project settings
4. Deploy

---

## Contact

| | |
|---|---|
| Phone | 91583 16316 / 9527316316 |
| Email | lakshdipcomputer22200@gmail.com |
| WhatsApp | +91 91583 16316 |
| Address | Miri Road, Near Santoshi Mata Mandir, Shashrinagar, Shevgaon |
| Hours | Monday – Sunday, 8:00 AM – 8:00 PM |

---

## License

Private — All rights reserved © Lakshdip Computer Institute
