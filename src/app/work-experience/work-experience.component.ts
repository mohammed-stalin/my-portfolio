import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Intership',
      company: 'TE Connectivity - TAC',
      duration: 'April 2023 - Juin 2023',
      description: [
        'creating a project using a Raspberry Pi and a Sensor ',
        'develop technical skills in hardware and software'
      ],
    },

  ];
  constructor() {}

  ngOnInit(): void {}
}
