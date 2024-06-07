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
      name: 'C/C++',
      level: 'Intermidiate',
      rating: 75,
    },
    {
      name: 'SQL',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS , PHP',
      level: 'Intermidiate',
      rating: 75,
    },
    {
      name: 'JAVA-POO',
      level: 'Intermidiate',
      rating: 80,
    },
    {
      name: 'Python',
      level: 'Intermediate',
      rating: 85,
    },
    {
      name: 'Machine Learning',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Big Data Technologies',
      level: 'Beginner',
      rating: 50,
    },
    {
      name: 'IoT Platforms',
      level: 'Beginner',
      rating: 50,
    },
    {
      name: 'Natural Language Processing (NLP)',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Advanced Databases',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'Laravel',
      level: 'beginner',
      rating: 30,
    },
    {
      name: 'Angualr',
      level: 'beginner',
      rating: 30,
    },
    {
      name: 'OFFICE 365',
      level: 'Intermidiate',
      rating: 80,
    },
    {
      name: 'canva',
      level: 'Expert',
      rating: 90,
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
