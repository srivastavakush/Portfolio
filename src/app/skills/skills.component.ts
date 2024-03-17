import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'JAVA',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Spring Boot',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'AWS Services',
      level: 'Intermediate',
      rating: 75,
    },
    
    {
      name: 'REST Development, Microservices architecture, API Testing ',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'PostgreSQL',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: 70,
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
