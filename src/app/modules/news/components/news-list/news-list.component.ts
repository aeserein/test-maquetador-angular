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
			"https://images.unsplash.com/profile-fb-1588888589-ea7c64fbedfc.jpg",
			"[name_user]",
			"https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg"
		)
		this.mockNews[1] = new News(
			"Practical Action",
			"In the words of Socrates, \"The unexamined life is not worth living.\" But what did Socrates mean exactly? Was he...",
			new Date().getTime(),
			"https://images.unsplash.com/profile-fb-1588888589-ea7c64fbedfc.jpg",
			"[name_user]",
			"https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg"
		)
		this.mockNews[2] = new News(
			"An Auspicious Time for BodyTalk Sessions",
			"Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...",
			new Date().getTime(),
			"https://images.unsplash.com/profile-fb-1588888589-ea7c64fbedfc.jpg",
			"[name_user]",
			"https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg"
		)
		this.mockNews[3] = new News(
			"Building Awareness: Creating a BodyTalk Matrix in Central Visayas and Mindanao, Philippines",
			"Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...",
			new Date().getTime(),
			"https://images.unsplash.com/profile-fb-1588888589-ea7c64fbedfc.jpg",
			"[name_user]",
			"https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg"
		)
		this.mockNews[4] = new News(
			"Practical Action",
			"In the words of Socrates, \"The unexamined life is not worth living.\" But what did Socrates mean exactly? Was he...",
			new Date().getTime(),
			"https://images.unsplash.com/profile-fb-1588888589-ea7c64fbedfc.jpg",
			"[name_user]",
			"https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg"
		)
		this.mockNews[5] = new News(
			"An Auspicious Time for BodyTalk Sessions",
			"Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...",
			new Date().getTime(),
			"https://images.unsplash.com/profile-fb-1588888589-ea7c64fbedfc.jpg",
			"[name_user]",
			"https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg"
		)
	}

}
