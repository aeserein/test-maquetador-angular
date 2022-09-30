import { Component, Input, OnInit } from '@angular/core';
import { Testimony } from '../../classes/testimony';

@Component({
	selector: 'app-testimonial-card',
	templateUrl: './testimonial-card.component.html',
	styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent {

	@Input() testimony! : Testimony;

	constructor() { }
}
