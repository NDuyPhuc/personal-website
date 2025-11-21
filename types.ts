import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  impact: string; // Business impact
  image: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  SERVICES = 'services',
  INSURANCE = 'insurance',
  CONTACT = 'contact'
}