import { ProficiencyLevel, SkillStatus } from '../types';
import type { SkillsData } from '../types';

export const skillsData: SkillsData = {
	skills: [
	  {
		category: 'Programming Languages',
		items: [
		  { 
			name: 'Python', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' 
		  },
		  { 
			name: 'Java', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' 
		  },
		  { 
			name: 'JavaScript', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' 
		  },
		  { 
			name: 'TypeScript', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg' 
		  },
		  { 
			name: 'Bash', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg' 
		  },
		  { 
			name: 'C', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' 
		  },
		  { 
			name: 'C++', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' 
		  },
		  { 
			name: 'Go', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg' 
		  },
		  { 
			name: 'Rust', 
			proficiency: ProficiencyLevel.Beginner, 
			status: SkillStatus.Learning, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg' 
		  },
		  { 
			name: 'Solidity', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg' 
		  },
		  { 
			name: 'C#', 
			proficiency: ProficiencyLevel.Beginner, 
			status: SkillStatus.Learning, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png' 
		  },
		  { 
			name: 'SQL', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' 
		  }
		]
	  },
	  {
		category: 'Frameworks',
		items: [
		  { 
			name: 'React.js', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' 
		  },
		  { 
			name: 'Svelte.js', 
			proficiency: ProficiencyLevel.Learning, 
			status: SkillStatus.Learning, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg' 
		  },
		  { 
			name: 'Vue.js', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' 
		  },
		  { 
			name: 'React Native', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' 
		  },
		  { 
			name: 'Flask', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg' 
		  },
		  { 
			name: 'Tailwind CSS', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' 
		  },
		  { 
			name: '.NET MAUI', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Priority, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg' 
		  },
		]
	  },
	  {
		category: 'Tools',
		items: [
		  { 
			name: 'PostgreSQL', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' 
		  },
		  { 
			name: 'MongoDB', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' 
		  },
		  { 
			name: 'Firebase', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg' 
		  },
		  { 
			name: 'Git', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' 
		  },
		  { 
			name: 'Ubuntu', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo-ubuntu_cof-orange-hex.svg' 
		  },
		  { 
			name: 'Heroku', 
			proficiency: ProficiencyLevel.Proficient, 
			status: SkillStatus.Learned, 
			logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Heroku_logo.svg' 
		  }
		]
	  },
	],
  };