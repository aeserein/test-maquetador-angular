import { state, style, trigger } from '@angular/animations';
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
		])
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
