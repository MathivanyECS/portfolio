import {
  SiPhp,
  SiPython,
  SiDart,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiSpringboot,
  SiFlutter,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiDotnet
} from 'react-icons/si';

import { FaCode, FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandCSharp } from 'react-icons/tb';

export const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C', icon: FaCode, color: '#A8B9CC' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'C#', icon: TbBrandCSharp, color: '#9B4F96' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    ],
  },
  {
    category: 'Frameworks & Backend',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: '.NET', icon: SiDotnet, color: '#512BD4' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Express.js', icon: SiExpress, color: '#aaaaaa' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    ],
  },
];