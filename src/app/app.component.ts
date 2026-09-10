import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup { title: string; items: string[]; }
interface Experience { role: string; company: string; period: string; bullets: string[]; }
interface Certification { name: string; url: string; }

@Component({
  selector: 'app-root', standalone: true, imports: [CommonModule],
  templateUrl: './app.component.html', styleUrl: './app.component.css'
})
export class AppComponent {
  menuOpen = false;
  lightMode = false;

  constructor() {
    this.lightMode = localStorage.getItem('portfolio-theme') === 'light';
  }

  readonly skills: SkillGroup[] = [
    { title: 'Backend', items: ['Java','Spring Boot','Spring MVC','Spring REST','Spring Security','Hibernate','JPA','Microservices'] },
    { title: 'Frontend', items: ['Angular 14+','TypeScript','JavaScript','HTML5','SCSS/CSS3','PrimeNG','Mapbox GL JS'] },
    { title: 'Cloud & DevOps', items: ['AWS','EC2','ECS','ECR','S3','RDS','Lambda','CloudWatch','SNS','SQS','CodePipeline','Git','Maven'] },
    { title: 'Data & Quality', items: ['MySQL','MS SQL Server','JPA Specifications','Native SQL','JUnit','Postman','Performance Optimization'] },
    { title: 'AI & Modern Development', items: ['Generative AI','LLM Integration','AI-Assisted Development','GitHub Copilot','Claude Code'] }
  ];

  readonly experience: Experience[] = [{
    role: 'Full Stack Software Developer', company: 'Cozentus Technologies Private Limited', period: 'Jul 2023 — Present',
    bullets: [
      'Developed RESTful microservices using Java and Spring Boot with JWT authentication, JPA Specifications and native SQL for high-volume shipment data.',
      'Built Angular/TypeScript geospatial dashboards with Mapbox GL JS, custom markers, geo-fencing, polygons, circles and PrimeNG.',
      'Implemented AWS Cognito, Secrets Manager, EC2 and CloudWatch with automated CI/CD using AWS CodePipeline.',
      'Reduced deployment downtime by 50% and manual monitoring effort by 50% through delivery automation and risk-alerting capabilities.',
      'Collaborated in a 10-member Agile/Scrum team across development, code reviews, testing, debugging and production releases.'
    ]
  }];

  readonly education = { degree: 'B.Tech in Electronics & Communication Engineering', institute: 'Silicon Institute of Technology, Sambalpur, Odisha', period: '2019 — 2023', score: 'CGPA 9.13' };

  readonly certifications: Certification[] = [
    { name: 'Java Programming Master Class for Software Developers — Udemy', url: 'https://www.udemy.com/certificate/UC-1b70ee1f-f51c-43c2-9c21-35b96156cdd3/' },
    { name: 'Angular – The Complete Guide — Udemy', url: 'https://www.udemy.com/certificate/UC-edf9b7eb-0019-4b87-a400-c8342a8f4509/' },
    { name: 'Generative AI Fundamentals — Databricks', url: 'https://credentials.databricks.com/a5029c4a-54c6-42d2-a92c-11d330558832' },
    { name: 'Claude 101 — Anthropic', url: 'https://verify.skilljar.com/c/2x7c3jznswfm' },
    { name: 'AI Fluency Framework & Foundations — Anthropic', url: 'https://verify.skilljar.com/c/pnqp46zhptg3' }
  ];

  toggleTheme(): void {
    this.lightMode = !this.lightMode;
    localStorage.setItem('portfolio-theme', this.lightMode ? 'light' : 'dark');
  }

  @HostListener('window:scroll') onScroll(): void { document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 30); }
  scrollTo(id: string): void { this.menuOpen = false; document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}
