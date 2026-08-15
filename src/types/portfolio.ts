export interface ServiceCard {
  id: string;
  title: string;
  count: string;
  iconBgClass: string;
  iconSvg: React.ReactNode;
}

export interface TimelineItem {
  id: string;
  company: string;
  date: string;
  role: string;
  description: string;
  nodeClass: string;
}

export interface TechSkill {
  id: string;
  name: string;
  description: string;
  badgeText: string;
  iconBgClass: string;
  iconSvg: React.ReactNode;
}

export interface SoftSkill {
  id: string;
  title: string;
  description: string;
  iconClass: string;
  iconSvg: React.ReactNode;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  cardClass: string;
  image?: string;
  tags: string[];
  mockupType?: "app" | "web" | "mint" | "coral";
}

export interface BlogArticle {
  id: string;
  category: string;
  categoryTagClass: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  url: string;
}
