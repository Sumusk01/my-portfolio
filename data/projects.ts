export type Project = {
  slug: string;
  title: string;
  description: string;
  outcome: string;
  stack: string[];
  github: string;
  liveDemo?: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'student-information-management-system',
    title: 'Student Information Management System',
    description:
      'Full-stack CRUD application to streamline student record management — a Spring Boot backend paired with PostgreSQL for reliable data persistence and a responsive React frontend.',
    outcome:
      'Gives administrators a reliable, production-grade system to add, edit, delete, and view student records with built-in validation and health monitoring.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React.js', 'REST APIs'],
    github: 'https://github.com/your-username/student-info-system',
    liveDemo: '',
    image: '/projects/student-info-system-cover.svg',
    featured: true,
  },
  {
    slug: 'drishtiai-image-dehazing-system',
    title: 'DrishtiAI — Image Dehazing System',
    description:
      'Final-year academic computer vision project focused on image dehazing for enhanced visual perception in hazy/foggy conditions. Contributed to system architecture planning, workflow design, and documentation.',
    outcome:
      'Comparative study across classical and deep learning dehazing approaches (DCP, AOD-Net, FFA-Net, DehazeFormer) on RESIDE SOTS and Foggy Driving datasets, with a YOLOv8 object-detection evaluation showing dehazing improves visual clarity but can reduce downstream detection performance in real foggy scenes.',
    stack: ['Python', 'Deep Learning', 'Computer Vision', 'YOLOv8'],
    github: 'https://github.com/your-username/drishti-ai',
    liveDemo: '',
    image: '/projects/drishtiai-cover.svg',
    featured: true,
  },
];
