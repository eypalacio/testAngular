import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const open_close = trigger('open_close', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('300ms', style({ transform: 'scale(0)', opacity: 0 })),
    ]),
])