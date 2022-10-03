import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { News } from '../../classes/news';

@Component({
	selector: 'app-article-card',
	templateUrl: './article-card.component.html',
	styleUrls: ['./article-card.component.scss'],
	animations: [
		trigger("hoverAnimation", [
			state("hover", style({
				color: "#00558E"
			})),
		]),
		trigger("imageOverlay", [
			state("hover", style({
				opacity: 0.7
			})),
			state("normal", style({
				opacity: 0
			})),
			transition("normal => hover", animate("0.3s ease")),
			transition("hover => normal", animate("0.3s ease-out")),
		]),
		trigger("readMore", [
			state("hover", style({
				transform: "translateY(-10px)",
				opacity: 1
			})),
			state("normal", style({
				transform: "none",
				opacity: 0
			})),
			transition("normal => hover", animate("0.5s ease")),
			transition("hover => normal", animate("0.5s ease-out")),
		]),
	]
})
export class ArticleCardComponent {

	bHover = false;
	@Input() news! : News;

	constructor() { }

	get hoverState() : string {
		return this.bHover ? "hover" : "normal";
	}
}
