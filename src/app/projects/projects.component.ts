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
    {
      title: 'French Language Chatbot',
      technologies: 'NLP, Fine-Tuning, RAG, LangChain, Vector Databases, docker',
      description: [
        'Developing a smart chatbot fine-tuned on a custom French language context.',
        'fine-tuning a pre-trained model on a FSTT dataset.',
        'Implementing Retrieval-Augmented Generation (RAG) techniques.',
        'Utilizing LangChain and vector databases.',
        'Focused on a case study for FSTT.',
      ],
    },
    {
      title: 'Machine Learning Application for Cancer Diagnosis',
      technologies: 'Python, Extreme Gradient Boosting, Naive Bayes',
      description: [
        'Implementing machine learning techniques on datasets from the UCI Machine Learning Repository.',
        'Focus on ovarian and prostate cancer datasets.',
        'Data description, preprocessing, and implementation of Extreme Gradient Boosting and Naive Bayes algorithms.',
        'Comparison of results using various metrics and implementations from Python libraries.',
      ],
    },
    {
      title: 'Comprehensive Machine Learning Application',
      technologies: 'Python, Various ML Algorithms',
      description: [
        'Developing an application for qualitative and quantitative data analysis.',
        'Implementing algorithms such as linear regression, decision trees, naive Bayes, SVM, k-means, nearest neighbor, random forest, and neural networks.',
        'Creating an intuitive user interface for data management and visualization.',
        'Integrating model validation and result export functionalities.',
        'Providing thorough documentation and tutorials.',
      ],
    },
    {
      title: 'AI and IoT (AIoT) Systems',
      technologies: 'Node-RED, AI, IoT',
      description: [
        'Exploring the combination of AI and IoT (AIoT) in various domains.',
        'Developing AIoT systems using Node-RED for tasks like environmental monitoring, personal health tracking, and smart home control.',
        'Emphasizing real-time data collection from sensors and AI analysis.',
        'Writing a scientific article on AIoT applications and developing a simple AIoT system.',
      ],
    },
    {
      title: 'Metaheuristics Algorithms and Articles',
      technologies: 'FOA, F3EA, FRA',
      description: [
        'Coding and writing articles about various metaheuristics algorithms.',
        'Detailed study and implementation of Falcon Optimization Algorithm,Find-Fix-Finish-Exploit-Analyze Algorithm, Flow Regime Algorithm.',
        'Exploring the methodologies and applications of these algorithms in real-world scenarios.'
      ],
    },
    {
      title: 'Multi-Agent System (SMA) Design and Modeling',
      technologies: 'SMA, CORMAS',
      description: [
        'Providing a detailed description of the design and modeling methodology of SMA.',
        'Detailed description of the SMA platform in question (CORMAS).',
        'Analyzing the advantages and disadvantages of the design methodology and the platform.',
        'Exploring various application domains.',
        'Conducting a comprehensive case study including design, modeling, and implementation.',
        'Compiling references from various sources including PDF files, Word documents, hyperlinks, etc.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
