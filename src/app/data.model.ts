import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faProjectDiagram, faGamepad, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

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
      elementAction: { action: 'redirect' }  }
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
    content: `Contributed to building a mobile app that allows users to advertise the items that they no longer need.`}
]

export var skillElements: Array<HomeModel.SkillElement> = [
  { skill: 'Java',
    description: `I am quite comfortable with writing my code in Java as it was the first programming language that I had learned as
                  well as the language that I had used the longest. Though despite the fact that Java is the language that I have used the longest,
                  there are still things within the language that I am still learning about such as the Hibernate framework.`,
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
