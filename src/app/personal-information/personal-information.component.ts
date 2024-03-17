import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Kush Srivastava'],
    ['DOB', '15/07/1996'],
    ['Work Exp', '2.5 Years'],
    ['Education', 'M.Tech (2021)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Developer with nearly 2.5 years of experience in Software Development, specializing in back-end and full stack roles. ',
    'Leading the Java development initiatives within the mobile team at GE Healthcare, Bengaluru,under the umbrella of Sutherland Global Services. ',
    'Proficient in the development of scalable microservices architecture, ensuring seamless communication and integration. ',
  ];
  constructor() {}

  ngOnInit(): void {}
}
