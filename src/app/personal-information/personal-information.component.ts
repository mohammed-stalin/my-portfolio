import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'AACHABI Mohammed'],
    ['DOB', '10/12/2001'],
    ['Professional Exp', 'Intership in TE Connectivity'],
    ['Education', '2008-PRESENT'],
    ['Interests', 'Software Development'],
  ];

  aboutMe: string[] = [
    'Hi, I am a passionate and dedicated student of computer science.',
    'Throughout my academic journey, I have acquired a solid foundation in programming languages such as C/C++, Java, and Python, and have gained practical experience in software development, algorithms, and data structures',
    'Through my dedication, perseverance, and continuous learning mindset, I aspire to make a meaningful impact in the world of technology and become a valuable asset in the computer science industry.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
