import { Component, OnInit } from '@angular/core';
import { News } from '../../classes/news';

@Component({
	selector: 'app-news-list',
	templateUrl: './news-list.component.html',
	styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {

	mockNews! : News[];

	constructor() {
		this.loadMockNews();
	}

	loadMockNews() {
		this.mockNews = [];
		this.mockNews[0] = new News(
			"Building Awareness: Creating a BodyTalk Matrix in Central Visayas and Mindanao, Philippines",
			"Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...",
			new Date().getTime(),
			"/assets/img/avatars/stock_6.jpg",
			"[name_user]",
			"/assets/img/articles/article_img_1.jpg"
		)
		this.mockNews[1] = new News(
			"Practical Action",
			"In the words of Socrates, \"The unexamined life is not worth living.\" But what did Socrates mean exactly? Was he...",
			new Date().getTime(),
			"/assets/img/avatars/stock_7.jpg",
			"[name_user]",
			"/assets/img/articles/article_img_2.jpg"
		)
		this.mockNews[2] = new News(
			"An Auspicious Time for BodyTalk Sessions",
			"Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...",
			new Date().getTime(),
			"/assets/img/avatars/stock_8.jpg",
			"[name_user]",
			"/assets/img/articles/article_img_3.jpg"
		)
		this.mockNews[3] = new News(
			"Building Awareness: Creating a BodyTalk Matrix in Central Visayas and Mindanao, Philippines",
			"Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...",
			new Date().getTime(),
			"/assets/img/avatars/stock_9.jpg",
			"[name_user]",
			"/assets/img/articles/article_img_4.jpg"
		)
		this.mockNews[4] = new News(
			"Practical Action",
			"In the words of Socrates, \"The unexamined life is not worth living.\" But what did Socrates mean exactly? Was he...",
			new Date().getTime(),
			"/assets/img/avatars/stock_10.jpg",
			"[name_user]",
			"/assets/img/articles/article_img_5.jpg"
		)
		this.mockNews[5] = new News(
			"An Auspicious Time for BodyTalk Sessions",
			"Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...",
			new Date().getTime(),
			"/assets/img/avatars/stock_11.jpg",
			"[name_user]",
			"/assets/img/articles/article_img_6.jpg"
		)
	}

}
