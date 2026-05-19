export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface MediaFile {
  url: string;
  imgix_url: string;
}

export type ProjectType = 'Web Application' | 'Mobile App' | 'Desktop App' | 'API/Backend' | 'Library/Tool' | 'Other';
export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Testing' | 'Mobile' | 'Tools' | 'Other';
export type Proficiency = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_name?: string;
    description?: string;
    summary?: string;
    featured_image?: MediaFile;
    screenshots?: MediaFile[];
    tech_stack?: string[];
    project_type?: ProjectType;
    live_url?: string;
    github_url?: string;
    featured?: boolean;
  };
}

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name?: string;
    category?: SkillCategory;
    proficiency?: Proficiency;
    years_experience?: number;
    icon?: MediaFile;
    description?: string;
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    company_name?: string;
    position?: string;
    company_logo?: MediaFile;
    start_date?: string;
    end_date?: string;
    current?: boolean;
    location?: string;
    employment_type?: EmploymentType;
    responsibilities?: string;
    technologies?: string[];
  };
}

export interface ContactInfo extends CosmicObject {
  type: 'contact-info';
  metadata: {
    full_name?: string;
    job_title?: string;
    bio?: string;
    profile_photo?: MediaFile;
    resume?: MediaFile;
    email?: string;
    phone?: string;
    location?: string;
    linkedin_url?: string;
    github_url?: string;
    twitter_url?: string;
    website_url?: string;
  };
}