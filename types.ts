
// Import React to provide the React namespace for ReactNode types.
import React from 'react';

export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  imageUrl: string;
}

export interface Service {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}

export interface Capability {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}