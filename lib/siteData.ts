export const site = {
  name: 'Lakshdip',
  subtitle: 'COMPUTER INSTITUTE',
  fullName: 'Lakshdip Computer Institute',
  tagline: 'A Step Towards Digital Future...',
  topBarText: 'Learn Skills, Shape the Future!',
  phone: '91583 16316',
  phone2: '9527316316',
  hours: 'Monday - Sunday 8.00 AM - 8.00 PM',
  email: 'lakshdipcomputer22200@gmail.com',
  website: 'lakshdipcomputer.com',
  whatsapp: '919158316316',
  address: 'Miri Road, Near Santoshi Mata Mandir, Shashrinagar, Shevgaon',
}

export const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'COURSES', href: '/courses' },
  {
    label: 'ADMISSION',
    href: '/admission',
    children: [
      { label: 'Online Admission', href: '/admission' },
      { label: 'Admission Form', href: '/admission' },
    ],
  },
  {
    label: 'RESULTS',
    href: '/results',
    children: [
      { label: 'GCC-TBC Results', href: '/results' },
      { label: 'CCC Results', href: '/results' },
    ],
  },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'NOTICES', href: '/notices' },
  { label: 'DOWNLOADS', href: '/downloads' },
  { label: 'CONTACT US', href: '/contact' },
]

export const topBarLinks = [
  { label: 'Student Login', href: '/student-login' },
  { label: 'Online Test', href: '/online-test' },
  { label: 'Download Center', href: '/downloads' },
  { label: 'Gallery', href: '/gallery' },
]

export const heroSlides = [
  {
    title: 'LEARN TYPING & SHORTHAND!',
    subtitle: 'Fulfill your dream of a Government Job!',
    banner: 'GCC-TBC | CCC | TALLY | ADV. EXCEL',
    image: '/images/Add/WhatsApp Image 2026-06-07 at 8.43.50 AM.jpeg',
    checks: ['Experienced Faculty', 'Modern Computer Lab', 'Planned Syllabus', '100% Success Guidance'],
    cta: 'Take Admission Today!',
    badge: 'NEW BATCHES: ADMISSION OPEN!',
  },
  {
    title: 'MAHARASHTRA STATE COUNCIL OF EXAMINATION , PUNE',
    subtitle: 'Government Certificate In Computer Typing Basic Course GCC-TBC',
    banner: 'GCC-TBC',
    image: '/images/image 01.jpeg',
    checks: ['Expert Faculty', 'Modern Lab', 'Job Oriented Syllabus', 'Placement Support'],
    cta: 'Apply Now',
    badge: 'ADMISSIONS OPEN!',
  },
]

export const defaultCourses = [
  {
    slug: 'typing',
    title: 'TYPING',
    description: 'English | Marathi | Hindi - GCC-TBC exam preparation.',
    descriptionKey: 'typingDescription',
    icon: 'typing',
    color: '#7b2cbf',
  },
  {
    slug: 'shorthand',
    title: 'SHORTHAND',
    description: 'Speed writing in English & Marathi. Government job oriented shorthand certification.',
    descriptionKey: 'shorthandDescription',
    icon: 'shorthand',
    color: '#2d6a4f',
  },
  {
    slug: 'ccc',
    title: 'CCC',
    description: 'Course on Computer Concepts — fundamental computer knowledge for all age groups.',
    descriptionKey: 'cccDescription',
    icon: 'ccc',
    color: '#e9c46a',
  },
  {
    slug: 'tally',
    title: 'TALLY PRIME',
    description: 'Complete accounting, GST, inventory & payroll management with Tally Prime.',
    descriptionKey: 'tallyPrimeDescription',
    icon: 'tally',
    color: '#2a9d8f',
  },
  {
    slug: 'excel',
    title: 'ADVANCED EXCEL',
    description: 'MIS Reports, Dashboards, VLOOKUP, Pivot Tables & Data Analysis for jobs.',
    descriptionKey: 'advancedExcelDescription',
    icon: 'excel',
    color: '#e63946',
  },
  {
    slug: 'basics',
    title: 'COMPUTER BASICS',
    description: 'Fundamental computer knowledge — Windows, Internet, Email for all age groups.',
    descriptionKey: 'computerBasicsDescription',
    icon: 'basics',
    color: '#1d4ed8',
  },
]

export const defaultNotices = [
  {
    title: 'GCC-TBC Exam Application Form Submission Starts',
    titleKey: 'noticeGccTbcApplicationFormSubmissionStarts',
    date: '2024-05-20',
    badge: 'NEW',
  },
  {
    title: 'New Batch Admission Open for CCC Course',
    titleKey: 'noticeNewBatchAdmissionOpenForCccCourse',
    date: '2024-05-18',
    badge: 'NEW',
  },
  {
    title: 'Typing Exam Schedule Announced for June 2024',
    titleKey: 'noticeTypingExamScheduleAnnouncedForJune2024',
    date: '2024-05-15',
    badge: '',
  },
  {
    title: 'Shorthand Practical Exam Dates Released',
    titleKey: 'noticeShorthandPracticalExamDatesReleased',
    date: '2024-05-12',
    badge: 'HSW',
  },
  {
    title: 'Tally Prime Weekend Batch Starting Soon',
    titleKey: 'noticeTallyPrimeWeekendBatchStartingSoon',
    date: '2024-05-10',
    badge: '',
  },
  {
    title: 'Advanced Excel Workshop — Free Demo Class',
    titleKey: 'noticeAdvancedExcelWorkshopFreeDemoClass',
    date: '2024-05-08',
    badge: 'NEW',
  },
]

export const stats = [
  { value: '20+', label: 'Years of Experience', labelKey: 'yearsOfExperience', icon: 'trophy' },
  { value: '10000+', label: 'Successful Students', labelKey: 'successfulStudents', icon: 'users' },
  { value: '100%', label: 'Practical Training', labelKey: 'practicalTraining', icon: 'certificate' },
  { value: '100%', label: 'Government Certified Courses', labelKey: 'governmentCertifiedCourses', icon: 'badge' },
  { value: '100%', label: 'Placement Support', labelKey: 'placementSupport', icon: 'headset' },
]
