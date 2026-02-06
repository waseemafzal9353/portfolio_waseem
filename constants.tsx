
import React from 'react';
import { 
  Layers, 
  Cpu, 
  Globe, 
  Lock, 
  Package,
  Server
} from 'lucide-react';
import { CaseStudy, Service, Capability } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'E-commerce Scale-up',
    problem: 'A rapidly growing fashion brand was losing 30% of peak-hour sales due to slow checkout performance and database locks.',
    solution: 'Re-architected the monolithic backend into modular microservices using Node.js and implemented Redis caching for inventory management.',
    impact: 'Checkout speed increased by 70%, and the system successfully handled a 400% traffic surge during Black Friday without downtime.',
    technologies: ['Node.js', 'React', 'MongoDB', 'Redis', 'AWS'],
    imageUrl: 'https://picsum.photos/seed/ecommerce/800/600'
  },
  {
    id: '2',
    title: 'Real-time SaaS Dashboard',
    problem: 'An industrial IoT startup needed to visualize thousands of data points per second with sub-second latency for monitoring factory floors.',
    solution: 'Developed a high-performance React dashboard utilizing WebSockets and a time-series optimized database schema.',
    impact: 'Reduced data latency from 5s to 200ms, enabling predictive maintenance that saved clients an average of $50k/month in downtime.',
    technologies: ['React', 'Next.js', 'Socket.io', 'InfluxDB', 'TypeScript'],
    imageUrl: 'https://picsum.photos/seed/saas/800/600'
  },
  {
    id: '3',
    title: 'HealthTech Security Audit',
    problem: 'A healthcare provider platform required HIPAA-compliant architecture to expand their telemedicine services.',
    solution: 'Implemented end-to-end encryption, multi-factor authentication, and an immutable audit log system using AWS CloudWatch and custom middleware.',
    impact: 'Passed all third-party security audits and enabled the client to onboard 5 new enterprise hospitals within 3 months.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS Security Hub'],
    imageUrl: 'https://picsum.photos/seed/health/800/600'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end development focused on robust, production-ready applications.',
    benefits: ['Faster development cycles', 'Cohesive technology stack', 'Future-proof codebases'],
    icon: <Globe className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'SaaS & MVP Strategy',
    description: 'Transforming ideas into validated products with a focus on speed-to-market.',
    benefits: ['Cost-effective launches', 'Scalable architecture from day one', 'User-centric design'],
    icon: <Package className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Architecture & Microservices',
    description: 'Designing systems that don\'t break as your user base grows.',
    benefits: ['Independent scaling', 'Fault tolerance', 'Easier maintenance'],
    icon: <Server className="w-6 h-6 text-blue-600" />
  }
];

export const CAPABILITIES: Capability[] = [
  {
    title: 'Frontend Solutions',
    description: 'High-performance React/Next.js apps with intuitive UX.',
    items: ['State Management (Redux/Zustand)', 'SEO Optimization', 'Responsive Design'],
    icon: <Layers className="w-5 h-5" />
  },
  {
    title: 'Backend & APIs',
    description: 'Secure, scalable Node.js services designed for growth.',
    items: ['RESTful & GraphQL', 'OAuth/JWT Security', 'Rate Limiting'],
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: 'Data & Security',
    description: 'Reliable data modeling and cloud-ready security.',
    items: ['PostgreSQL & MongoDB', 'Redis Caching', 'Data Encryption'],
    icon: <Lock className="w-5 h-5" />
  }
];
