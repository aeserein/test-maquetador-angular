import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../classes/news';

@Component({
	selector: 'app-article-card',
	templateUrl: './article-card.component.html',
	styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {

	@Input() news! : News;

	constructor() { }
}
