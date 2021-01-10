import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faProjectDiagram,
  faGamepad,
  faGraduationCap,
  faBook,
  faPiggyBank, faLaptopCode, faMusic
} from "@fortawesome/free-solid-svg-icons";

export interface ProgressData {
  label: string,
  rating: number
}

export namespace HomeModel {
  export interface ElementAction {
    action: string,
    parameter ?: string
  }

  export interface PageElement {
    elementName?: string,
    elementIcon?: any,
    elementAction: HomeModel.ElementAction
  }

  export interface TimeLineElement {
    date: string,
    title: string,
    location: string,
    icon: any,
    content: string
  }

  export interface SkillElement {
    skill: string,
    description?: string,
    proficiency: Array<ProgressData>
  }
}

export namespace ExperienceModel {
  export interface Experience {
    company: string;
    position: string;
    timePeriod: string;
    details: string;
    imagePath: string;
  }
}

export namespace HobbiesModel {
  export interface Hobby {
    title: string;
    content: string;
    icon: any;
  }
}

export namespace ProjectsModel {
  export interface Project {
    title: string;
    briefDescription: string;
    detailedDescription: string;
    techUsed: Array<string>;
    link: string;
    logo?: string;
    imageDisplay?: string;
    contributedProject: boolean;
  }
}

export var headerElements: Array<Array<HomeModel.PageElement>> = [
  [
    { elementIcon: faGithub,
      elementAction: {action: 'newTab', parameter: 'https://github.com/ByteMap'} },
    { elementIcon: faLinkedin,
      elementAction: {action: 'newTab', parameter: 'https://www.linkedin.com/in/andy-chen-929ba6a2/'} }
  ],
  [
    { elementName: 'Hobbies',
      elementAction: { action: 'redirect', parameter: 'my-hobbies' } },
    { elementName: 'Experiences',
      elementAction: { action: 'redirect', parameter: 'my-experience' }  },
    { elementName: 'Projects',
      elementAction: { action: 'redirect', parameter: 'my-projects' }  },
    { elementName: 'Resume',
      elementAction: { action: 'newTab', parameter: '../assets/AndyResume.pdf' }  }
  ]
];

export var timeLineElements: Array<HomeModel.TimeLineElement> = [
  { date: 'June 2016 - June 2020',
    title: 'Undergraduate Degree',
    location: 'University of California, Santa Cruz',
    icon: faGraduationCap,
    content: `Attended and graduated from UC Santa Cruz with a Bachelor's of Science degree in Computer Science. Enrolled in and completed courses such as
              web development, database systems, and computer systems design throughout the years as an undergraduate.`},
  { date: 'August 2018',
    title: 'Chrome Extension - Link Marker',
    location: 'https://github.com/ByteMap/LinkMarker',
    icon: faProjectDiagram,
    content: `Created a chrome extension to store selected URLs and visually blacklist hyperlinks connected to those URLs. This enabled me to avoid certain web novels
              and mangas that had interesting covers, but poor stories whenever they get a chapter update.`},
  { date: 'September 2018 - December 2018',
    title: 'Data Structures Class Grader',
    location: 'UCSC Baskin School of Engineering',
    icon: faBriefcase,
    content: `Worked as a grader for a data structures class. Responsibilities included inspecting code to ensure that the students created their own
              version of a given data structure, grading their programs based on a series of tests, and submitting grades as well as feedback on time.`},
  { date: 'August 2019 - September 2020',
    title: 'Software Engineer Co-op/Intern',
    location: 'UCSC Genomics Institute',
    icon: faBriefcase,
    content: `Worked as a Full Stack Developer for the Dockstore project under a SCRUM environment. Developed UIs that executed API calls to retrieve or send data
              from and to the webservice that would either return the user with the requested data, or save the user's data into the database. Created endpoints
              that enabled users and admins to delete or retrieve data from the database. Other responsibilities included creating integration and unit tests as part of
              resolving my assigned tickets, addressing existing issues in the codebase, and logging new issues when running into them.`},
  { date: 'September 2019 - December 2019',
    title: 'Mobile Application - FreeBay',
    location: 'https://github.com/kyeasy/CSE115a-freeBay-',
    icon: faProjectDiagram,
    content: `Worked with 5 other people in building an android application that provides users with a platform to donate their items with ease.
              Utilized SCRUM methodology and GitHub for team and code organization, and various APIs such as the Camera API and Firebase API for
              functionality.`}
]

export var skillElements: Array<HomeModel.SkillElement> = [
  { skill: 'Java',
    description: `I am quite comfortable with writing my code in Java as it was the first programming language that I had learned, as
                  well as the language that I had used for the longest. Although I had mainly used Java for school related projects, such as
                  creating a linked list from scratch and utilizing it to accurately calculate the entry and exit times of customer in a bank,
                  I had also used it to create many other interesting things such as RESTful APIs. However, despite the fact that I had used
                  Java for a long time, there are still a lot of topics within the language that I have yet to explore, such as the various
                  frameworks that Java supports.`,
    proficiency: [
      { label: 'Comfort', rating: 80 },
      { label: 'Knowledge', rating: 85 }
    ]
  },
  { skill: 'TypeScript',
    description: `I started getting into TypeScript, or more specifically Angular, in 2019 when I was starting off my career
                  as a full stack developer for the UCSC Genomics Institute. Though I had prior experience working with Vue.js and
                  basic JavaScript, learning and using Angular was what gave me a deeper perspective in front end development. For example,
                  I was unaware about the existence of Observables (or Promises) and lifecycle hooks until I started working with Angular.
                  However, despite the fact that I have experience with TypeScript for over a year, I am far from being an expert on the language.
                  Even now, I am constantly doing research in order to improve my skills with front end development and build better applications.`,
    proficiency: [
      { label: 'Comfort', rating: 90 },
      { label: 'Knowledge', rating: 70 }
    ]
  },
  { skill: 'C++',
    description: `C++ is the second OOP language that I learned in university. Similar to Java, I am comfortable with the object oriented programming paradigm,
                  however, that does not mean I am comfortable with using the language. Even though I have used C++ extensively to write non-trivial
                  programs, such as a multi-threaded client server or a file compressor/decompressor, I have never used it for projects that are outside
                  of my coursework. Though I do admit that programming in C++ is fairly similar to programming in Java, there are still some things about
                  C++ that irritates me such as having to constantly keep track of pointers and worrying about when to deallocate memory.`,
    proficiency: [
      { label: 'Comfort', rating: 65 },
      { label: 'Knowledge', rating: 75 }
    ]
  },
  { skill: 'Python',
    description: `Python was by far the easiest programming language for me to learn. The first time that I had used the language was when I was required
                  to complete a programming challenge in Python. Though working with Python was nerve wracking at first because I had no prior experience
                  with the language, it soon became really easy to work with as the syntax was not only easy to get used to, but there was also a large amount
                  of online support for the language. I eventually took a class on Python to familiarize myself with the language even further; however, I have
                  not had a chance to use it ever since taking the class. Though I am currently thinking of a fun pet project to do in Python so I could get
                  some practice with it.`,
    proficiency: [
      { label: 'Comfort', rating: 70 },
      { label: 'Knowledge', rating: 75 }
    ]
  },
  { skill: 'Hibernate',
    description: `I have had a brief, but fulfilling experience working with Java Hibernate during my time at the Genomics Institute. My most memorable experience working with the
                  framework was when I was assigned a ticket which required me to create an endpoint that would update a given user's administrator status. Before I started building the
                  endpoint, I had to understand how Hibernate would play a role in my ticket. I learned that updating the User object field would not be the complete solution as the database
                  would not know that the User object was updated. That was when I learned of Hibernate's role where it would take the newly updated field of the object and update the
                  database through the '@Column' annotation. Although I have some experience working with Hibernate, the framework is still very new to me; however, I intend to learn more
                  about it as the learning experience was not only fun, but the whole framework simply fascinated me.`,
    proficiency: [
      { label: 'Comfort', rating: 50 },
      { label: 'Knowledge', rating: 40 }
    ]
  },
  { skill: 'PostgreSQL',
    description: `After taking a course on PostgreSQL during my last year of college, I started to increase my experience with the database management system
                  by requesting that I take on more tickets related to the backend at work. From there, I started to exercise and familiarize myself with the
                  topics that I had learned in class, such as adding table constraints, retrieving specific data entries from table(s), and joining tables. Though
                  I had some frustrating experiences with working with PostgreSQL, such as trying to figure out why exporting a table to a csv file was not working,
                  I still enjoyed working with the DBMS as it was satisfying to see data being retrieved when asked or creating a relational algebra formula that
                  actually worked as intended. I do hope that for my next job, I can work with PostgreSQL again or any other DBMS.`,
    proficiency: [
      { label: 'Comfort', rating: 75 },
      { label: 'Knowledge', rating: 70 }
    ]
  },
  { skill: 'OpenAPI',
    description: `I was introduced to the OpenAPI specification when I first started working on the backend of the Dockstore Project. At first glance, I was intimidated
                  by the amount of annotations that OpenAPI provided, but after I started working with those annotations and learning their purposes, I became more
                  comfortable working with OpenAPI. Throughout the time where I was learning and utilizing OpenAPI, I have created several RESTful APIs, such as enabling
                  users to delete a certain request that they had made. However, despite that I have some experience working with OpenAPI, I know that there are still a lot more
                  topics on the specification that I have yet to touch upon. Possibly in the near future, I can think of a fun pet project to do where I can utilize OpenAPI and
                  learn more about the topics that I have yet to cover.`,
    proficiency: [
      { label: 'Comfort', rating: 60 },
      { label: 'Knowledge', rating: 40 }
    ]
  },
  { skill: 'CircleCI/TravisCI',
    description: `I learned about the importance of creating tests for my code when I first started off my career. As I was working as a web developer at the time, I would
                  utilize CircleCI for writing integration tests for the front-end tickets that I was assigned with, and TravisCI for my assigned back-end tickets. Getting
                  used to writing integration tests took some time I was unfamiliar with not only the technology that I was using for the tests, but the concept of integration
                  testing as well. Over the course of about a month, I had gotten used to utilizing CircleCI and TravisCI to create my own integration tests, and I soon realized
                  the importance of writing integration tests as they had saved me countless times whenever I had modified my code based off of the feedback that I had received.
                  However, despite utilizing the two technologies for some time, I still have a lot to learn such as building artifacts for CircleCI.`,
    proficiency: [
      { label: 'Comfort', rating: 85 },
      { label: 'Knowledge', rating: 70 }
    ]
  },
  { skill: 'HTML/SCSS',
    description: `Working with HTML and SCSS/CSS has been pretty straight forward to me. Though learning HTML was fairly simple, learning SCSS was a bit more complicated
                  due to the large amount of things to understand such as grid-layouts, flexbox, and animations. Even now, I'm constantly exploring and practicing unfamiliar
                  topics that SCSS/CSS has to offer, such as keyframes, control directives, and selectors.`,
    proficiency: [
      { label: 'Comfort', rating: 95 },
      { label: 'Knowledge', rating: 85 }
    ]
  },
]

export var moreInfoElements: Array<HomeModel.PageElement> = [
  { elementName: 'Hobbies',
    elementIcon: faGamepad,
    elementAction: { action: 'redirect', parameter: 'my-hobbies' }},
  { elementName: 'Experience',
    elementIcon: faBriefcase,
    elementAction: { action: 'redirect', parameter: 'my-experience' }},
  { elementName: 'Projects',
    elementIcon: faProjectDiagram,
    elementAction: { action: 'redirect', parameter: 'my-projects' }}
]

export var experiences: Array<ExperienceModel.Experience> = [
  { company: 'UCSC Genomics Institute',
    position: `Software Engineer, Intern`,
    timePeriod: `Aug 2019 - Sept 2020`,
    details: `<div>
                  I had started working for the Genomics Institute during the summer of my Junior year in college and had continued
                  to work there for over a year. I started off working as a Front End Developer, and throughout the year, slowly delved into
                  Back End work. The beginning of my time with the GI, or the Dockstore team, was a bit tough, but also very enjoyable. I barely
                  had any experience with UI development, but regardless, I started diving into Angular 8, Observables, Material, Asynchronous development,
                  Test Driven Development, and more. Likewise with learning about the UI, working with the backend, and overall, with the team was a great
                  and enjoyable learning experience. For example, despite my experience with Java, I was clueless when I was assigned a ticket that had
                  to do with Java Hibernate, but nevertheless, I had fun learning and utilizing it. Additionally, I also had experience with working in
                  groups prior to working at the Genomics Institute, but working in a professional environment completely threw me off. I had no experience with
                  SCRUM development until joining the team, but after settling in, I was well-versed with stand-up meetings, sprint plannings, and retrospectives.
                  Overall, my time with the Genomics Institute was priceless and delightful. The experience had not only given me knowledge of Full Stack
                  Development and SCRUM development, but also a sense of what the industry is like, such as how I will be constantly learning and adapting to new
                  technologies.
                  <div class="pt-2">
                    <b> Skills Acquired: </b>
                    Angular 8, Java Hibernate, RESTful API, Akita State Management, OpenAPI, Swagger, Angular Material, CircleCI, TravisCI,
                    PostgreSQL, GitHub, SCRUM development
                  </div>
                </div>`,
    imagePath: '../assets/images/experience-page-images/GI.png' },
  { company: `UCSC School of Engineering`,
    position: `Data Structures Class Grader`,
    timePeriod: `Sept 2018 - Dec 2018`,
    details: `<div>
                  This was essentially my first job related to the field that I was studying in. Although my role as a grader wasn't
                  flashy or anything special, it nonetheless introduced me to the different methodologies and thought processes that
                  the students had used to create and implement their own data structures. If anything, I was not only grading, but
                  also learning from some of the students who had approached issues in an entirely more elegant manner than I would
                  have. Aside from that, working as a grader was overall an interesting experience that taught me the importance
                  of time management as well as the frustrations of scripts failing due to missing edge cases.
                  <div class="pt-2">
                    <b> Skills Acquired: </b>
                    Python, more familiarity with GitHub branches, Time management
                  </div>
                </div>`,
    imagePath: '../assets/images/experience-page-images/BSOE.png'}
];

export var hobbies: Array<HobbiesModel.Hobby> = [
  { title:   'Anime',
    content: `I was first introduced to anime when I was in middle school, and to this day, I still continue to watch it.
              Rather than just being a form of entertainment, anime has acted as one of my best mitigators for stress and anxiety
              when I was in school or at work. Similar to playing games, watching anime provides me with enough distraction for
              my brain to cool off and sort itself. Additionally, it also acts as a topic for my friends and I to discuss, which in turn
              strengthens my bonds with them. Overall, watching anime is one of my favorite past-times as it allows me to unwind, which allows
              me to perform even better on things such as work and school.`,
    icon: faBook },
  { title:   'Games',
    content: `Playing games has been a hobby of mine ever since my childhood. Before when I had no access to the internet
              or any electronics, I would often visit my cousins and play board games or card games with them. Though I generally
              play more video games now, such as Pokemon, I still occasionally go back to playing party games, such as Monopoly or Cards
              Against Humanity, with friends and family. For me, games will always have a special place in my heart as they had helped me
              out for as long as I can remember. They had acted as a coping mechanism for stress when I was at school, a bridge that
              connected me with my friends and family when I was unable to physically meet with them, and more.`,
    icon: faGamepad },
  { title:   'Investing',
    content: `I started getting into stocks in 2019 as I believed that it would be better to put my money somewhere and
              watch it grow rather than to have it sit in my savings and do nothing. After a couple of months of
              investing into my first stock, I decided to become more active with investing by exploring new stocks in order to
              diversify my portfolio and spending about an hour a day to catch up with daily events. Overall, I truly enjoy
              investing as it not only financially benefits me, but it also encourages me to read up on the news everyday, and
              it allows me to spend my free time doing something productive.`,
    icon: faPiggyBank },
  { title:   'Programming',
    content: `Coding gives me a sense of fulfillment as it pushes me to learn and master more technologies in order for
              me to successfully build what I want. During my spare time, I would try to at least
              progress a little bit with my projects and discover new frameworks and libraries to use. Most of my
              projects are centered around visualizing data and aiding users such as myself. For example, LinkMarker
              was created so that I could visually blacklist mangas as I was frustrated with getting baited into reading mangas
              that had poor stories, but great covers every time they get a chapter update.`,
    icon: faLaptopCode },
  { title:   'Music',
    content: `Like with many people in this world, music plays a major role in my life. It has helped me with achieving my goals by
              providing me with motivational lyrics, easing my anxiety with soothing melodies, and ultimately becoming a better and
              stronger individual. Because of how influential music is in my life, I would often spend a lot of my free time looking
              for new music that would continue to motivate me and become better than who I was yesterday. Some of the genres that I
              enjoy listening to are Pop (American, Korean, Japanese), Electronic, and Classical.`,
    icon: faMusic },
];

export var projects: Array<ProjectsModel.Project> = [
  { title: `Personal Website`,
    briefDescription: `A website created to give a more detailed resume of myself`,
    detailedDescription: `This Angular project was designed to show off what my normal resume could not. Sure, my resume
                          could show to recruiters the projects that I had worked on and the experiences that I had built, but
                          the biggest flaw that I see with resumes is that they tend to not show off anything outside of experiences,
                          projects, and education. I wanted recruiters to get a better sense of who I am as a person, to see what drove
                          me to become a Software Engineer, and to show that I care about the quality for the work that I do. With
                          those reasons in mind, I had decided to build this project.`,
    techUsed: ['Angular 8', 'RxJS', 'Material', 'Angular Animations', 'FortAwesome', 'HTML', 'SCSS'],
    link: `https://github.com/ByteMap/myWebsite`,
    logo: `../assets/images/projects-page-images/angular.png`,
    contributedProject: false
  },
  { title: `LinkMarker`,
    briefDescription: `A chrome extension that allows users to recolor hyperlinks`,
    detailedDescription: `I built LinkMarker for the sole purpose of visually filtering out mangas that had great covers, but
                          disappointing stories. What the chrome extension did was that it changed the color of all of the hypertexts
                          that the user had marked to red, which gave the user a sense of what those marked links would redirect to. This project
                          was extremely handy as it would remind me that a certain manga was not my taste despite having a great cover everytime I see
                          it when that manga gets a chapter update. Sometime in the near future, I intend to create a V2 of this project which would give
                          users more colors to choose from, and allow them to diversify their marked URLs.`,
    techUsed: ['JQuery', 'Chrome Storage API', 'HTML', 'CSS'],
    link: `https://github.com/ByteMap/LinkMarker`,
    logo: `../assets/images/projects-page-images/linkMarker.png`,
    contributedProject: false
  },
  { title: `Dockstore`,
    briefDescription: `An online registry for BioTools and BioWorkflows`,
    detailedDescription: `Dockstore is an online registry for bioinformatic tools and workflows, and it is the open sourced project
                          that I had contributed on during my time with the Genomics Institute. The platform allows for users to create and
                          share their Docker based tools and workflows that are described in the Common Workflow Language, Workflow Description Language,
                          or the NextFlow Language. Additionally, the platform allows for organizations to be created so that their tools and workflows would
                          have a clear affiliation.`,
    techUsed: ['Angular 9', 'RxJS', 'Java', 'Hibernate', 'OpenAPI', 'PostgreSQL', 'Akita State Management', 'DropWizard', 'TravisCI', 'CircleCI'],
    link: `https://dockstore.org`,
    logo: `../assets/images/projects-page-images/dockstore.png`,
    imageDisplay: `../assets/images/projects-page-images/dockstore-page.png`,
    contributedProject: true
  },
  { title: `FreeBay`,
    briefDescription: `A platform made for users to donate their items easily`,
    detailedDescription: `FreeBay is a group project that I had worked on during my senior year of university. The project's main goal was to enable users
                          to donate their items without any hassles. All the user needs to do was create an account, take a picture of the item that
                          they want to donate away, list where the item can be picked up from, optionally include their contact information, and finally
                          post the item for people who are using the application to see.`,
    techUsed: ['Java', 'Android Studio', 'Android Camera API', 'Firebase', 'AndroidX'],
    link: `https://github.com/kyeasy/CSE115a-freeBay-`,
    logo: ``,
    contributedProject: true
  }
];
