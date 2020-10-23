import { trigger, animate, transition, style, query, group, animation, keyframes } from '@angular/animations';

export const homePageAnimation = trigger('routeAnimations', [
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
          style({opacity: 0}),
          animate('0.65s'),
          style({ opacity: 1})
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
