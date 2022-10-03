import { Component, OnInit } from '@angular/core';
import { Testimony } from '../../classes/testimony';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-testimonials-page',
	templateUrl: './testimonials-page.component.html',
	styleUrls: ['./testimonials-page.component.scss']
})
export class TestimonialsPageComponent implements OnInit {

	testimoniesMock : Testimony[] = [];
	customOptions : OwlOptions;

	constructor() {
		this.loadMockData();
		this.customOptions = {
			loop: true,
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			dots: true,
			navSpeed: 700,
			navText: ["<", ">"],
			responsive: {
			  0: {
				items: 1
			  },
			  700: {
				items: 2
			  },
			  1100: {
				items: 3
			  }
			},
			nav: true
		}
	}

	ngOnInit(): void {
	}

	private loadMockData() : void {
		this.testimoniesMock[0] = new Testimony(
			"/assets/img/avatars/stock_1.jpg",
			"Nancy Briggs",
			"Practitioner",
			"I now understand the power of Lorem ipsum for healing the body, mind and spirit. I'm very fortunate to connect with certified Lorem ipsum practitioner Nancy Briggs. My 13-year-old son had severe depression and also an invasive anxiety has plagued him.",
			new Date().getTime(),
			"Fear/ Phobia- Afraid to Drive",
			"/assets/img/icons/testimony_icon_1.png"
		);
		this.testimoniesMock[1] = new Testimony(
			"/assets/img/avatars/stock_2.jpg",
			"Adreia Bin",
			"Member",
			"Quando recebi minha 1 sessão de enterprise no inicio da minha formação, a primeira coisa que me veio a cabeça foi...noooossaaa isso é magnifico e na mesma semana testei em meu filho de 8 anos que até então apresentava enurese noturna e já havia testado varias outras técnicas. Fazem 2 meses que fiz e com apenas 3 sessões essa questão dele já foi solucionada. Isso me mostra mais ainda que estou no caminho certo. Gratidão.",
			new Date().getTime(),
			"Maravilhoso",
			"/assets/img/icons/testimony_icon_2.png"
		);
		this.testimoniesMock[2] = new Testimony(
			"/assets/img/avatars/stock_3.jpg",
			"Charlene Cooper",
			"Member",
			"I received this lovely email from the handler of one of the CARDA Search & Rescue canines, a group I volunteer with to aid in the release of secondary PTSD.",
			new Date().getTime(),
			"Search & Rescue Canine",
			"/assets/img/icons/testimony_icon_1.png"
		);
		this.testimoniesMock[3] = new Testimony(
			"/assets/img/avatars/stock_4.jpg",
			"Elise Staffan",
			"Therapist",
			"I now understand the power of Lorem ipsum for healing the body, mind and spirit. I'm very fortunate to connect with certified Lorem ipsum practitioner Nancy Briggs. My 13-year-old son had severe depression and also an invasive anxiety has plagued him.",
			new Date().getTime(),
			"SECTOR 4",
			"/assets/img/icons/testimony_icon_2.png"
		);
		this.testimoniesMock[4] = new Testimony(
			"/assets/img/avatars/stock_5.jpg",
			"Joan Mattis",
			"Gardener",
			"I received this lovely email from the handler of one of the CARDA Search & Rescue canines, a group I volunteer with to aid in the release of secondary PTSD.",
			new Date().getTime(),
			"SECTOR 5",
			"/assets/img/icons/testimony_icon_1.png"
		);
	}
}
