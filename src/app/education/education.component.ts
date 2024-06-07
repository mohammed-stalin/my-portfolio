import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Faculty of Science and Technology",
      course: 'MST-Intelligence artificielle et sciences des données',
      duration: '2023-2025',
      ville: 'Tanger',
    },
    {
      institute: "Faculty of Science and Technology",
      course: 'LST-Genie Informatique',
      duration: '2022-2023',
      ville: 'Tanger',
    },
    {
      institute: 'Faculty of Science and Technology ',
      course: 'DEUST-MIPC',
      duration: '2020-2022',
      ville: 'Tanger',
    },
    {
      institute: 'Mohammed VI high school',
      course: 'Bacalaureat',
      duration: '2017-2020',
      ville: 'Imouzer',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
