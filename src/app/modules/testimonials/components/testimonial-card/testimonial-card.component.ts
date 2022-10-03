import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Testimony } from '../../classes/testimony';

@Component({
	selector: 'app-testimonial-card',
	templateUrl: './testimonial-card.component.html',
	styleUrls: ['./testimonial-card.component.scss'],
	animations: [
		trigger("hoverAnimation", [
			state("hover", style({
				transform: "scale(1.05)"
			})),
			state("normal", style({
				transform: "none"
			})),
			transition("normal => hover", animate("0.2s ease-out")),
			transition("hover => normal", animate("0.2s ease-in")),
		])
	]
})
export class TestimonialCardComponent {

	bHover = false;

	@Input() testimony! : Testimony;

	constructor() { }

	get hoverState() : string {
		return this.bHover ? "hover" : "normal";
	}
}
