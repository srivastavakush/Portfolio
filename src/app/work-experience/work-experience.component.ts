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
      role: 'Software Developer',
      company: 'Sutherland Global Services',
      client: 'Client Name: GE Healthcare',
      duration: 'Dec 2021 - Now',
      description: [
      ' Developing microservices from scratch.',
      ' Providing Technical and functional requirement for feature ',
      ' Utilizing AWS services to optimize application performance',
      ' Establishing advanced skills like multi-threading,junit',],
    
      projects: [
        {
          title: 'Mobile Application Development (Dec 2023 - Present)',
          details: [
            'Developed two micro services from scratch.',
            'Implemented technical improvements in microservices.',
            'Led from the Java side in the absence of a Tech Lead.',
            'Expanded skill set to full stack by contributing to Node.js.',
          ],
        },
        {
          title: 'Customer Experience Support (Aug 2023 - Dec 2023)',
          details: [
            'Spearheaded the creation of backend of GEHC support page.',
            'Demonstrated innovation and initiative.',
            'Utilized technologies like Spring and AWS Services',
            'Implemented New Relic for api monitoring'
          ],
        },
        {
          title: 'Microservices Expansion (Daas team) (Apr 2022 - Aug 2023)',
          details: [
            'Received consistent appreciation for expanding microservices.',
            'Navigated complex development challenges efficiently.',
            'Utilized technologies including Spring Boot, AWS services',
            'Used Graylog, Solr, Rally, Jenkins also'
          ],
        },
        {
          title: 'Training: (December 2021 – March 2022)',
          details: [
            'Engaged in a Full Stack Development program.',
            'Gained daily hands-on experience from design to deployment.',
            'Acquired proficiency in developing responsive applications.',
            'Learned best practices for containerizing applications.',
          ],
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
