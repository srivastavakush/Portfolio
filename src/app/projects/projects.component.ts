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
      title: ' E-Commerce Application ',
      technologies: 'Spring Boot, Core Java Angular, SQL, Postman',
      description: [
        'Developed an online shopping application utilizing Angular framework for the frontend.',
        'Implemented a robust backend using Spring Boot REST API and Core Java to handle various operations',
        'such as user authentication, product management, and order processing.',
        'Utilized MS-SQL database for efficient storage and management of application data.',
        'Created Swagger page API documentation for clear and comprehensive understanding of the API endpoints.',
        'Conducted API testing using Postman to ensure the functionality and reliability of the endpoints.'
      ],
    },
    {
      title: 'Image to text converter',
      technologies: 'Spring boot, OCR Library Integration, Webclient, Rest api, CSS, Angular, HTML, JavaScript,SQL',
      description: [
        'Image Upload: Users can upload images containing text files from their devices.',
        'OCR Processing: The backend server processes the uploaded images using an OCR library ',
        'Text Display: The converted text is displayed to the user',
        'Error Handling: The application provides appropriate error handling mechanisms to handle invalid inputs',
        'Security: Implemented authentication and authorization mechanisms to secure user data and prevent unauthorized access.'
      ],
    },
    {
      title: 'Google Data Analytics Professional Certificate ',
      technologies: 'Python, Pandas, SQL, Matplotlib, Numpy, Excel',
      description: [
        'Worked as a Data Analyst for Cyclistic',
        'Designed a new marketing strategy targeting the conversion of casual riders into annual members.',
        'Presented recommendations to Cyclistic executives.',
        'Supported recommendations with compelling data insights and professional data visualizations.'
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
