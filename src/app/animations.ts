import { trigger, animate, transition, style, query, group, animation, keyframes, state } from '@angular/animations';

export const homeIntroAnimation = trigger('homeIntroAnimation', [
  state('initial', style({ opacity: 0 })),
  state('toggleIntroAnimation', style({ opacity: 1 })),
  transition('* => toggleIntroAnimation', [
    animate('0s'),
    query('.vertical-divider, .intro-left, .intro-right, .intro-button', [style({ opacity: 0 })], { optional: true }),
    query('.vertical-divider', [
        style({ transform: 'scale3d(1,0,1)' }),
        animate('0.75s'),
      ],
      { optional: true }),
    group([
      query('.intro-left', [
        style({ opacity: 0, transform: 'translateX(10%)' }),
        animate('1s'),
        style({ opacity: 1, transform: 'translateX(0)' })
      ]),
      query('.intro-right', [
        style({ opacity: 0, transform: 'translateX(-10%)' }),
        animate('1s'),
        style({ opacity: 1, transform: 'translateX(0)' })
      ]),
    ]),
    query('.intro-button', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('.9s'),
      style({ opacity: 1, transform: 'translateY(0)' })
    ])
  ]),
]);

export const homeCompressedIntroAnimation = trigger('homeCompressedIntroAnimation', [
  state('initial', style({ opacity: 0 })),
  transition('* => toggleIntroAnimation', [
    animate('0s'),
    query('.intro-compressed-divider, .intro-top, .intro-bottom, .intro-button', [style({ opacity: 0 })]),
    query('.intro-compressed-divider', [
        style({ transform: 'scale3d(0,1,1)' }),
        animate('0.75s'),
      ]),
    group([
      query('.intro-top', [
        style({ opacity: 0, transform: 'translateY(20%)' }),
        animate('1s'),
      ]),
      query('.intro-bottom', [
        style({ opacity: 0, transform: 'translateY(-20%)' }),
        animate('1s'),
      ]),
    ]),
    query('.intro-button', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('1s'),
    ])
  ]),
]);

export const homeAboutAnimation = trigger('homeAboutAnimation', [
  state('initial', style({ opacity: 0 })),
  transition('* => toggleAboutAnimation', [
    animate('0s'),
    query('.center-text, .horizontal-divider, .profile-image, .aboutSection1, .aboutSection2, .aboutSection3, .aboutSection4', [
      style({ opacity: 0 })], { optional: true }),
    group([
      query('.center-text', [
        style({ opacity: 0, transform: 'translateY(-20%)' }),
        animate('.75s'),
      ]),
      query('.horizontal-divider', [
        style({ transform: 'scale3d(0,1,1)' }),
        animate('.75s'),
      ]),
      query('.profile-image', [
        style({ opacity: 0, transform: 'translateX(20%)' }),
        animate('.75s')
      ])
    ]),
    query('.aboutSection1', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('.65s')
    ]),
    query('.aboutSection2', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('.65s')
    ]),
    query('.aboutSection3', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('.65s')
    ]),
    query('.aboutSection4', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('.65s')
    ])
  ])
]);

export const homeSidebarAnimation = trigger('homeSidebarAnimation', [
  state('hide', style({ transform: 'translateX(110%)'})),
  state('show', style({ transform: 'translateX(0)'})),
  transition('* => *', animate('.25s'))
])

export const homeCompressedAboutAnimation = trigger('homeCompressedAboutAnimation', [
  state('initial', style({ opacity: 0 })),
  transition('* => toggleAboutAnimation', [
    animate('0s'),
    query('.center-text, .horizontal-divider, .profile-image, .aboutSection1, .aboutSection2, .aboutSection3, .aboutSection4', [
      style({ opacity: 0 })], { optional: true }),
    group([
      query('.center-text', [
        style({ opacity: 0, transform: 'translateY(-20%)' }),
        animate('.75s'),
      ]),
      query('.horizontal-divider', [
        style({ transform: 'scale3d(0,1,1)' }),
        animate('.75s'),
      ]),
    ]),
    query('.aboutSection1', [
      style({ opacity: 0, transform: 'translateY(-10%)' }),
      animate('.65s')
    ]),
    query('.aboutSection2', [
      style({ opacity: 0, transform: 'translateY(-10%)' }),
      animate('.65s')
    ]),
    query('.aboutSection3', [
      style({ opacity: 0, transform: 'translateY(-10%)' }),
      animate('.65s')
    ]),
    query('.aboutSection4', [
      style({ opacity: 0, transform: 'translateY(-10%)' }),
      animate('.65s')
    ]),
    query('.profile-image', [
      style({ opacity: 0, transform: 'translateY(-10%)' }),
      animate('.75s')
    ])
  ])
]);

export const homeTimelineHeaderAnimation = trigger('homeTimelineHeaderAnimation', [
  state('initial', style({ opacity: 0 })),
  state('toggleUncompressedTimelineAnimation', style({ opacity: 1 })),
  state('toggleCompressedTimeLineAnimation', style({ opacity: 1 })),
  transition('* => toggleUncompressedTimelineAnimation', [
    animate('0s'),
    query('.center-text, .horizontal-divider', [style({ opacity: 0 })]),
    group([
      query('.center-text', [
        style({ opacity: 0, transform: 'translateY(-20%)' }),
        animate('.75s'),
      ]),
      query('.horizontal-divider', [
        style({ transform: 'scale3d(0,1,1)' }),
        animate('.75s'),
      ]),
    ])
  ]),
  transition('* => toggleCompressedTimelineAnimation', [
    animate('0s'),
    query('.center-text, .horizontal-divider', [style({ opacity: 0 })]),
    group([
      query('.center-text', [
        style({ opacity: 0, transform: 'translateY(-20%)' }),
        animate('.75s'),
      ]),
      query('.horizontal-divider', [
        style({ transform: 'scale3d(0,1,1)' }),
        animate('.75s'),
      ]),
    ])
  ])
]);

export const homeTimelineAnimation = trigger('timelineAnimation', [
  state('initial', style({ opacity: 0 })),
  transition('* => toggleUncompressedTimelineAnimation', [
    animate('0s'),
    query(`.timelineElementLeft0, .timelineElementIcon0, .timelineElementRight0,
                   .timelineElementLeft1, .timelineElementIcon1, .timelineElementRight1,
                   .timelineElementLeft2, .timelineElementIcon2, .timelineElementRight2,
                   .timelineElementLeft3, .timelineElementIcon3, .timelineElementRight3,
                   .timelineElementLeft4, .timelineElementIcon4, .timelineElementRight4`,
      style({ opacity: 0})),
    group([
      query('.timelineElementLeft0', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('.5s'),
      ]),
      query('.timelineElementIcon0', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timelineElementRight0', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timelineElementLeft1', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('.5s'),
      ]),
      query('.timelineElementIcon1', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timelineElementRight1', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timelineElementLeft2', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('.5s'),
      ]),
      query('.timelineElementIcon2', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timelineElementRight2', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timelineElementLeft3', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('.5s'),
      ]),
      query('.timelineElementIcon3', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timelineElementRight3', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timelineElementLeft4', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('.5s'),
      ]),
      query('.timelineElementIcon4', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timelineElementRight4', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ])
  ]),
  transition('* => toggleCompressedTimelineAnimation', [
    animate('0s'),
    query(`.timelineElementIcon0, .timelineElementDetails0,
                   .timelineElementIcon1, .timelineElementDetails1,
                   .timelineElementIcon2, .timelineElementDetails2,
                   .timelineElementIcon3, .timelineElementDetails3,
                   .timelineElementIcon4, .timelineElementDetails4`,
      style({ opacity: 0 }), { optional: true }),
    group([
      query('.timelineElementIcon0', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timelineElementDetails0', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timelineElementIcon1', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timelineElementDetails1', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timelineElementIcon2', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timelineElementDetails2', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timelineElementIcon3', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timelineElementDetails3', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timelineElementIcon4', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timelineElementDetails4', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
  ]),
]);

export const homeSkillsAnimation = trigger('homeSkillsAnimation', [
  state('initial', style({ opacity: 0 })),
  transition('* => toggleSkillsAnimation', [
    animate('0s'),
    query('.center-text, .skill-names-container, .skill-desc-title, .skill-progress-ring, .skill-desc-desc',
      [style({ opacity: 0 })]),
    group([
      query('.center-text', [
        style({ opacity: 0, transform: 'translateY(-20%)' }),
        animate('.75s'),
      ]),
      query('.horizontal-divider', [
        style({ transform: 'scale3d(0,1,1)' }),
        animate('.75s'),
      ]),
    ]),
    group([
      query('.skill-names-container', [
        style({ opacity: 0, transform: 'translateX(-20%)'}),
        animate('.75s')
      ]),
      query('.skill-desc-title', [
        style({ opacity: 0, transform: 'translateY(-20%)'}),
        animate('.75s')
      ])
    ]),
    query('.skill-progress-ring', [
      style({ opacity: 0 }),
      animate('.5s')
    ]),
    query('.skill-desc-desc', [
      style({ opacity: 0, transform: 'translateY(-20%)'}),
      animate('.5s')
    ])
  ])
]);

export const homeCompressedSkillsAnimation = trigger('homeCompressedSkillsAnimation', [
  state('initial', style({ opacity: 0 })),
  transition('* => toggleSkillsAnimation', [
    animate('0s'),
    query('.center-text, .compressed-skill-names-container, .skill-desc-title, .skill-progress-ring, .compressed-skill-desc-desc',
      [style({ opacity: 0 })]),
    group([
      query('.center-text', [
        style({ opacity: 0, transform: 'translateY(-20%)' }),
        animate('.75s'),
      ]),
      query('.horizontal-divider', [
        style({ transform: 'scale3d(0,1,1)' }),
        animate('.75s'),
      ]),
    ]),
    query('.compressed-skill-names-container', [
      style({ opacity: 0, transform: 'translateY(-20%)'}),
      animate('.75s')
    ]),
    query('.skill-desc-title', [
      style({ opacity: 0, transform: 'translateY(-20%)'}),
      animate('.5s')
    ]),
    query('.skill-progress-ring', [
      style({ opacity: 0 }),
      animate('.5s')
    ]),
    query('.compressed-skill-desc-desc', [
      style({ opacity: 0, transform: 'translateY(-20%)'}),
      animate('.5s')
    ])
  ])
]);

export const homeMoreInfoAnimation = trigger('homeMoreInfoAnimation', [
  state('initial', style({ opacity: 0 })),
  state('toggleMoreInfoAnimation', style({ opacity: 1 })),
  transition('* => toggleMoreInfoAnimation', [
    animate('0s'),
    query('.center-text, .horizontal-divider, .info-card0, .info-card1, .info-card2', [style({ opacity: 0 })]),
    group([
      query('.center-text', [
        style({ opacity: 0, transform: 'translateY(-20%)' }),
        animate('.75s'),
      ]),
      query('.horizontal-divider', [
        style({ transform: 'scale3d(0,1,1)' }),
        animate('.75s'),
      ]),
    ]),
    group([
      query('.info-card0', [
        style({ opacity: 0, transform: 'translateX(-20%)' }),
        animate('.75s'),
      ]),
      query('.info-card1', [
        style({ opacity: 0, transform: 'translateY(-10%)' }),
        animate('.75s'),
      ]),
      query('.info-card2', [
        style({ opacity: 0, transform: 'translateX(20%)' }),
        animate('.75s'),
      ])
    ])
  ])
]);

export const homeCompressedMoreInfoAnimation = trigger('homeCompressedMoreInfoAnimation', [
  state('initial', style({ opacity: 0 })),
  state('toggleMoreInfoAnimation', style({ opacity: 1 })),
  transition('* => toggleMoreInfoAnimation', [
    animate('0s'),
    query('.center-text, .horizontal-divider, .info-card0, .info-card1, .info-card2', [style({ opacity: 0 })]),
    group([
      query('.center-text', [
        style({ opacity: 0, transform: 'translateY(-20%)' }),
        animate('.75s'),
      ]),
      query('.horizontal-divider', [
        style({ transform: 'scale3d(0,1,1)' }),
        animate('.75s'),
      ]),
    ]),
    query('.info-card0', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('.65s'),
    ]),
    query('.info-card1', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('.65s'),
    ]),
    query('.info-card2', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('.65s'),
    ])
  ])
]);

export const homeConclusionAnimation = trigger('homeConclusionAnimation', [
  state('initial', style({ opacity: 0 })),
  state('toggleConclusionAnimation', style({ opacity: 1 })),
  transition('* => toggleConclusionAnimation', [
    animate('0s'),
    query('.conclusion, .contact-text, .vertical-divider, .connect-text, .intro-button',
      [style({ opacity: 0 })]),
    query('.conclusion', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('.75s')
    ]),
    query('.vertical-divider', [
        style({ transform: 'scale3d(1,0,1)' }),
        animate('.75s'),
    ]),
    group([
      query('.contact-text', [
        style({ opacity: 0, transform: 'translateX(-20%)'}),
        animate('.75s')
      ]),
      query('.connect-text', [
        style({ opacity: 0, transform: 'translateX(20%)'}),
        animate('.75s')
      ])
    ]),
    query('.intro-button', [
      style({ opacity: 0 }),
      animate('1s'),
    ]),
  ])
]);

export const homeCompressedConclusionAnimation = trigger('homeCompressedConclusionAnimation', [
  state('initial', style({ opacity: 0 })),
  state('toggleConclusionAnimation', style({ opacity: 1 })),
  transition('* => toggleConclusionAnimation', [
    animate('0s'),
    query('.compressed-conclusion, .contact-text, .intro-compressed-divider, .connect-text, .intro-button',
      [style({ opacity: 0 })]),
    query('.compressed-conclusion', [
      style({ opacity: 0, transform: 'translateY(-20%)' }),
      animate('.75s')
    ]),
    query('.intro-compressed-divider', [
      style({ transform: 'scale3d(0,1,1)' }),
      animate('.75s'),
    ]),
    group([
      query('.contact-text', [
        style({ opacity: 0, transform: 'translateY(50%)'}),
        animate('.75s')
      ]),
      query('.connect-text', [
        style({ opacity: 0, transform: 'translateY(-30%)'}),
        animate('.75s')
      ])
    ]),
    query('.intro-button', [
      style({ opacity: 0 }),
      animate('1s'),
    ]),
  ])
]);

export const routeAnimation = trigger('routeAnimations', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => experiencePage', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query('.experience1, .experience0', [style({ opacity: 0 })]),
    query('.experience0',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.experience1',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
  ]),
  transition('* => hobbiesPage', [
    query('.hobby0, .hobby1, .hobby2, .hobby3, .hobby4', [style({ opacity: 0 })]),
    query('.hobby0',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.hobby1',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.hobby2',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.hobby3',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.hobby4',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
  ]),
  transition('* => projectsPage', [
    query('.project0, .project1, .project2, .project3', [style({ opacity: 0 })]),
    query('.project0',
      [
        style({opacity: 0}),
        animate('0.65s'),
      ]),
    query('.project1',
      [
        style({opacity: 0}),
        animate('0.65s'),
      ]),
    query('.project2',
      [
        style({opacity: 0}),
        animate('0.65s'),
      ]),
    query('.project3',
      [
        style({opacity: 0}),
        animate('0.65s'),
      ]),
  ]),
]);

export const experiencePageAnimation = trigger('experiencePageAnimation', [
  transition('void => *', [
    query('.experience0, .experience1', [style({ opacity: 0 })]),
    query('.experience0',
      [
        style({opacity: 0}),
        animate('0.65s'),
        style({ opacity: 1})
      ]),
    query('.experience1',
      [
        style({opacity: 0}),
        animate('0.65s'),
        style({ opacity: 1})
      ])
  ])
]);

export const projectsPageAnimation = trigger('projectsPageAnimation', [
  transition('void => *', [
    query('.project0, .project1, .project2, .project3', [style({ opacity: 0 })]),
    query('.project0',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.project1',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.project2',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.project3',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ])
  ])
]);

export const hobbiesPageAnimation = trigger('hobbiesPageAnimation', [
  transition('void => *', [
    query('.hobby0, .hobby1, .hobby2, .hobby3, .hobby4', [style({ opacity: 0 })]),
    query('.hobby0',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.hobby1',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.hobby2',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.hobby3',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ]),
    query('.hobby4',
      [
        style({opacity: 0}),
        animate('0.65s'),
    ])
  ])
]);

export const homeHeaderAnimation = trigger('homeHeaderAnimation',[
  state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
  state('hidden', style( { opacity: 0, transform: 'translateY(-100%)' })),
  transition('* => *', animate('300ms ease-in'))
]);

export const pulseAnimation = animation([
  style({ transform: 'scale(1)' }),
  animate(
    '{{ timings }}',
    keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale({{ scale }})', offset: 0.5 }),
      style({ transform: 'scale(1)', offset: 1 })
    ])
  )
]);
