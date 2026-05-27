// ── Skill (produced by the engine, not stored statically) ───
export interface Skill {
  name: string;
  icon: string;
  color: string;
  proficiency: number;  // 0-95, derived algorithmically
  frequency: number;  // number of projects it appears in
}

// ── Tag attached to each project ────────────────────────────
export interface Tag {
  name: string;
  level: 'core' | 'supporting' | 'exposure';
}

// ── Project ──────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: Tag[];             // structured tags
  weight: 1 | 2 | 3;        // project importance
  complexity: 'low' | 'medium' | 'high';
  codeLink: string;
  demoLink?: string;           // optional — only shown when present
}

export interface ProfileInfo {
  homeImage: string;
  aboutImage: string;
}

export interface Education {
  period: string;
  degree: string;
  school: string;
  status: string;
  logo: string | null;
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  image: string;
  color: string;
  skillsLearned?: string[];
  credentialLink?: string;
}

export interface Achievement {
  title: string;
  org: string;
  year: string;
  image: string;
  badge: string;
  badgeColor: string;
  skillsGained?: string[];
  link?: string;
}

export interface CommunityRole {
  name: string;
  role: string;
  org: string;
  desc: string;
  image: string;
  color: string;
  link?: string;
}

export const profileData: ProfileInfo = {
  homeImage: '/profile/profile.jpeg',
  aboutImage: '/profile/profile.jpeg',
};

// ── Projects (controls order = exact render order in UI) ─────
export const projectsData: Project[] = [
  {
    // ★ FEATURED project — full-width hero card
    title: 'SkillLink Platform',
    description: 'A university skill-sharing and collaboration platform where students can share and learn skills, build their portfolios, and collaborate on projects and hackathons. Led the team and developed the Authentication Module.',
    image: '/projects/SkillLink.jpg',
    weight: 3,
    complexity: 'high',
    tags: [
      { name: 'React', level: 'core' },
      { name: 'Spring Boot', level: 'core' },
      { name: 'MongoDB', level: 'core' },
      { name: 'TypeScript', level: 'supporting' },
      { name: 'Java', level: 'supporting' },
    ],
    codeLink: 'https://github.com/MathivanyECS/skilllink-platform',
  },
  {
    // ★ FEATURED project — full-width hero card
    title: 'University Hostel Management System',
    description: 'Developed a web-based Hostel Management System to simplify hostel room allocation and request management for students and administrators. Features separate interfaces for students and admins, making the process more organized and efficient.',
    image: '/projects/Hostel_Management_System.jpeg',
    weight: 3,
    complexity: 'high',
    tags: [
      { name: 'PHP', level: 'core' },
      { name: 'MySQL', level: 'core' },
      { name: 'JavaScript', level: 'supporting' },
      { name: 'HTML', level: 'supporting' },
      { name: 'CSS', level: 'supporting' },
    ],
    codeLink: 'https://github.com/MathivanyECS/hostel-management-system',
    demoLink: 'https://drive.google.com/file/d/1rj4GtkmEYGzJpO4GIuRWwEseqL-qWIye/view?usp=sharing',
  },
  {
    title: 'Hardware Tracker System',
    description: 'Developed a desktop-based Hardware Tracker System to streamline hardware store operations and improve inventory management efficiency. Provides secure management of products, billing, and reporting with real-time database updates.',
    image: '/projects/Hardware_Management.jpeg',
    weight: 2,
    complexity: 'medium',
    tags: [
      { name: 'C#', level: 'core' },
      { name: '.NET', level: 'core' },
      { name: 'SQL Server', level: 'supporting' },
      { name: 'SSMS', level: 'exposure' },
      { name: 'RDLC Reports', level: 'exposure' },
    ],
    codeLink: 'https://github.com/MathivanyECS/Hardware-Tracker',
    demoLink: 'https://drive.google.com/file/d/1fsA03pPf8B6IYDaegL5BbrSUjp6dpHZd/view?usp=sharing',
  },
];

export const educationData: Education[] = [
  {
    period: '2023 – 2027', degree: 'B.Sc.Hons Electronics and Computer science',
    school: 'University of Kelaniya', status: 'In Progress',
    logo: 'Education/Kelaniya.png',
    link: 'https://www.kln.ac.lk/'
  },
  {
    period: '2019 – 2021', degree: 'A/L Physical Science',
    school: "KN/St.Theresa's girls college", status: 'Completed',
    logo: '/Education/girls college.png',
    link: 'https://www.facebook.com/profile.php?id=61553301508093'
  }
];

export const certificationsData: Certification[] = [
  {
    name: 'Certificate in Web Designing',
    issuer: 'University of Kelaniya - Sri Lanka',
    year: 'July 2025',
    image: '/Certificates/Web Designing.jpeg',
    color: '#0ea5e9',

    // image path for certificate preview
    credentialLink: '/Certificates/Web Designing.jpeg',

    skillsLearned: ['Web Design', 'Joomla!']
  },

  {
    name: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    year: 'November 2025',
    image: '/Certificates/Python_for_Beginners_E-Certificate.jpg',
    color: '#0ea5e9',

    credentialLink: '/Certificates/Python_for_Beginners_E-Certificate.jpg',

    skillsLearned: ['Python Programming']
  },

  {
    name: 'Introduction to Information Security',
    issuer: 'HashX',
    year: 'October 2025',
    image: '/Certificates/Introduction to Information Security.jpeg',
    color: '#0ea5e9',

    credentialLink: '/Certificates/Introduction to Information Security.jpeg',

    skillsLearned: ['Cybersecurity']
  }
];

export const achievementsData: Achievement[] = [
  {
    title: 'SLT Mobitel TechNovation 2025 - Finalist',
    org: 'SLT Mobitel',
    year: '2025',

    image: '/Achievements/SLTMobital_Final.jpeg',

    badge: 'Finalist',
    badgeColor: '#0ea5e9',

    link: '/Achievements/SLTMobital_Final.jpeg',

    skillsGained: [
      'Innovation Development',
      'Problem Solving',
      'Technology Solutions',
      'Team Collaboration'
    ]
  },

  {
    title: 'SLT Mobitel TechNovation 2025 - Semi Finalist',
    org: 'SLT Mobitel',
    year: '2025',

    image: '/Achievements/SLTMobital_Semi_Final.jpeg',

    badge: 'Semi Finalist',
    badgeColor: '#0ea5e9',

    link: '/Achievements/SLTMobital_Semi_Final.jpeg',

    skillsGained: [
      'Innovation Development',
      'Creative Thinking',
      'Presentation Skills',
      'Teamwork'
    ]
  }
];


