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
      institute: "Dr. APJ Abdul kalam technical University",
      course: 'M.Tech',
      duration: '2019-2021',
      score: '82.60%',
    },
    {
      institute: 'Amity University',
      course: 'B.Tech',
      duration: '2014-2018',
      score: '77.30%',
    },
    {
      institute: 'Montfort Inter College,Lucknow',
      course: 'HSC',
      duration: '2012-2013',
      score: '77.80%',
    },
    {
      institute: 'SGNS inter college, Gonda',
      course: 'SSC',
      duration: '2010-2011',
      score: '83.50%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
