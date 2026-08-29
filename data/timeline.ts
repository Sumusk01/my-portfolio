export type TimelineItem = {
  date: string;
  title: string;
  org: string;
  type: 'education' | 'project' | 'certification';
  description?: string;
  tech?: string[];
};

export const timeline: TimelineItem[] = [
  {
    date: '2026',
    title: 'B.Tech in Computer Science & Engineering',
    org: 'NSHM Knowledge Campus, Durgapur',
    type: 'education',
    description: 'Coursework: DSA, Software Engineering, Operating Systems, Computer Networking.',
  },
  {
    date: '2025',
    title: 'DrishtiAI — Image Dehazing System',
    org: 'Final Year Academic Project',
    type: 'project',
    description: 'Computer vision research project; architecture, evaluation, and documentation.',
    tech: ['Python', 'Deep Learning', 'YOLOv8'],
  },
  {
    date: '2025',
    title: 'CampusConnect - Student Information Management System',
    org: 'Personal Project',
    type: 'project',
    description: 'Full-stack CRUD app with Spring Boot, PostgreSQL, and React.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React.js'],
  },
  {
    date: '2025',
    title: 'Java Spring Framework, Spring Boot, Spring AI',
    org: 'Udemy',
    type: 'certification',
  },
  {
    date: '2025',
    title: 'AI & Generative AI Certifications (3 courses, 40+ hrs)',
    org: 'IBM',
    type: 'certification',
  },
  {
    date: '2024',
    title: 'The Complete Web Development Bootcamp',
    org: 'Udemy',
    type: 'certification',
  },
  {
    date: '2022',
    title: 'Higher Secondary (Class XII), Science',
    org: 'Deshbandhu Vidyalaya (Boys), Chittaranjan',
    type: 'education',
  },
];
