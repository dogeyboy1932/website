// Enums for consistent status and proficiency levels
export enum ProficiencyLevel {
	Beginner = 'beginner',
	Proficient = 'proficient',
	Learning = 'learning'
  }
  
  export enum SkillStatus {
	Learned = 'learned',
	Learning = 'learning',
	Priority = 'priority'
  }
  
  // Interface for individual skill item
  export interface SkillItem {
	name: string;
	proficiency: ProficiencyLevel;
	status: SkillStatus;
	logoUrl: string;
  }


  export interface HobbiesData {
	hobbies: HobbyCategory[];
  }

  // Interface for skill category
  export interface HobbyCategory {
	category: string;
	items: HobbyOrOther[];
  }

  export interface HobbyOrOther {
	name: string;
	logoUrl: string;
  }
  
  // Interface for skill category
  export interface SkillCategory {
	category: string;
	items: SkillItem[];
  }
  
  // Interface for project
  export interface Project {
	title: string;
	duration: string;
	description: string;
	githubLink: string;
  }

  export interface ProjectData {
	projects: Project[];
  }

  
  export interface SkillsData {
	skills: SkillCategory[];
  }

  export interface CustomLink {
	platform: string;
	title: string;
	href: string;
	isExternal?: boolean;
}