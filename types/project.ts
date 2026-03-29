export interface ResearchStat {
  num: string;
  label: string;
}

export interface Phase {
  num: string;
  title: string;
  desc: string;
}

export interface Metric {
  val: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category?: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  year?: string;
  color?: string;
  hero?: string;
  heroImage?: string;
  role?: string;
  methods?: string[];
  problem?: string;
  process?: string;
  solution?: string;
  results?: string;
  reflections?: string;
  leadership?: string;
  challenges?: string[];
  researchStats?: ResearchStat[];
  phases?: Phase[];
  metrics?: Metric[];
  quote?: string;
}
