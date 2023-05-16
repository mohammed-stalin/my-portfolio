import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'cocos2D-X Game',
      technologies: 'Cocos2D-X , C++ ,OOP',
      description: [
        'Knowledge of the Cocos2d-x development platform and how it works.',
        'Knowledge of level design and image creation for games.',
        'Knowledge of motion algorithms and animation management for characters and objects in the game.',
        'Learn OOP',
      ],
    },
    {
      title: 'Dynamic Web Store',
      technologies: 'Laravel , PHP , SQL',
      description: [
        'Knowledge of Laravel: understand the basic features of Laravel and how to use them to develop web applications.',
        'Understand how to define routes, controllers and templates to manage application data.',
        'Understand how to work with a database to store application data.',
      ],
    },
    {
      title: 'WCUP 2022 landing Page',
      technologies: 'HTML, CSS, JS',
      description: [
        'Development of website statique',
        'Understand web development using HTML ,CSS and JavaScript',
      ],
    },
    {
      title: 'Deliverers Tracking',
      technologies: 'Java , JavaFx, SQL , SceneBuilder , OOP',
      description: [
        'Development of Java application to track deliverers',
        'get acquainted in building intrefaces using java ',
        'get acquainted with oriented programing ',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
