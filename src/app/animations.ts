import {trigger, animate, transition, style, query, group} from '@angular/animations';

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
    query('.experience2, .experience1', [style({ opacity: 0 })], { optional: true }),
    group([
      query(':enter',
        [
          style({ transform: 'translateX(100%)', left: 100 }),
          animate('.75s ease-out',
            style({ transform: 'translateX(0%)', left: 0 })
          )],
        { optional: true }),
      // query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
      //   optional: true,
      // }),
    ]),
    query('.experience2',
      [
        style({opacity: 0}),
        animate('1s'),
        style({ opacity: 1})
      ],
      {optional: true}),
    query('.experience1',
      [
        style({opacity: 0}),
        animate('1s'),
        style({ opacity: 1})
      ],
      {optional: true}),
    ])
]);
