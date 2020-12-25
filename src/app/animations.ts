import { trigger, animate, transition, style, query, group, animation, keyframes, state } from '@angular/animations';

export const homeIntroAnimation = trigger('homeIntroAnimation', [
  transition(':enter', [
    query('.vertical-divider, .intro-left, .intro-right, .intro-button', [style({ opacity: 0 })], { optional: true }),
    query('.vertical-divider', [
        style({ transform: 'scale3d(1,0,1)' }),
        animate('0.75s'),
      ],
      { optional: true }),
    group([
      query('.intro-left', [
        style({ opacity: 0, transform: 'translateX(15%)' }),
        animate('1s'),
        style({ opacity: 1, transform: 'translateX(0)' })
      ]),
      query('.intro-right', [
        style({ opacity: 0, transform: 'translateX(-15%)' }),
        animate('1s'),
        style({ opacity: 1, transform: 'translateX(0)' })
      ]),
      query('.intro-button', [
        style({ opacity: 0, transform: 'translateY(-20%)' }),
        animate('1s'),
        style({ opacity: 1, transform: 'translateY(0)' })
      ]),
    ])
  ]),
]);

export const homeAboutAnimation = trigger('homeAboutAnimation', [
  transition(':enter', [
    query('.sectionTitle, .horizontal-divider, .profile-image, .aboutSection1, .aboutSection2, .aboutSection3, .aboutSection4', [
      style({ opacity: 0 })], { optional: true }),
    group([
      query('.sectionTitle', [
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
])

export const homeTimelineHeaderAnimation = trigger('homeTimelineHeaderAnimation', [
  transition(':enter', [
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
])

export const homeTimelineAnimation = trigger('timelineAnimation', [
  transition(':enter', [
    query(`.timeLineElementLeft0, .timeLineElementIcon0, .timeLineElementRight0,
                   .timeLineElementLeft1, .timeLineElementIcon1, .timeLineElementRight1,
                   .timeLineElementLeft2, .timeLineElementIcon2, .timeLineElementRight2,
                   .timeLineElementLeft3, .timeLineElementIcon3, .timeLineElementRight3,
                   .timeLineElementLeft4, .timeLineElementIcon4, .timeLineElementRight4`,
      style({ opacity: 0})),
    group([
      query('.timeLineElementLeft0', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('.5s'),
      ]),
      query('.timeLineElementIcon0', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timeLineElementRight0', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timeLineElementLeft1', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('.5s'),
      ]),
      query('.timeLineElementIcon1', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timeLineElementRight1', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timeLineElementLeft2', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('.5s'),
      ]),
      query('.timeLineElementIcon2', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timeLineElementRight2', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timeLineElementLeft3', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('.5s'),
      ]),
      query('.timeLineElementIcon3', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timeLineElementRight3', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ]),
    group([
      query('.timeLineElementLeft4', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('.5s'),
      ]),
      query('.timeLineElementIcon4', [
        style({ opacity: 0 }),
        animate('.5s'),
      ]),
      query('.timeLineElementRight4', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('.5s'),
      ]),
    ])
  ])
]);

export const homeSkillsAnimation = trigger('homeSkillsAnimation', [
  transition(':enter', [
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

export const homeMoreInfoAnimation = trigger('homeMoreInfoAnimation', [
  transition(':enter', [
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
])

export const homeConclusionAnimation = trigger('homeConclusionAnimation', [
  transition(':enter', [
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

export const experiencePageAnimation = trigger('routeAnimations', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => experiencePage', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(':enter', style({ position: 'fixed', width: '100%', height: '100%'}), { optional: true }),
    query('.experience1, .experience0', [style({ opacity: 0 })], { optional: true }),
    group([
      query(':enter',
        [
          style({ opacity: 0 }),
          animate('0.65s'),
          style({ opacity: 1 })
          ],
        { optional: true }),
    ]),
    query('.experience0',
      [
        style({opacity: 0}),
        animate('0.65s'),
        style({ opacity: 1})
      ],
      {optional: true}),
    query('.experience1',
      [
        style({opacity: 0}),
        animate('0.65s'),
        style({ opacity: 1})
      ],
      {optional: true}),
    ])
]);

export const cardFadeInAnimation = trigger('experiencePageAnimation', [
  transition('* => gridView', [
    query('.experience0, .experience1', [style({ opacity: 0 })], { optional: true }),
    query('.experience0',
      [
        style({opacity: 0}),
        animate('0.65s'),
        style({ opacity: 1})
      ],
      {optional: true}),
    query('.experience1',
      [
        style({opacity: 0}),
        animate('0.65s'),
        style({ opacity: 1})
      ],
      {optional: true}),
  ]),
  transition('* => listView', [
    query('.experience0, .experience1', [style({ opacity: 0 })], { optional: true }),
    query('.experience0',
      [
        style({opacity: 0}),
        animate('0.65s'),
        style({ opacity: 1})
      ],
      {optional: true}),
    query('.experience1',
      [
        style({opacity: 0}),
        animate('0.65s'),
        style({ opacity: 1})
      ],
      {optional: true}),
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
