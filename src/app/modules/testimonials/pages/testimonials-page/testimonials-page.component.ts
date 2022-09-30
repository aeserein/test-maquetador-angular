import { Component, OnInit } from '@angular/core';
import { Testimony } from '../../classes/testimony';

@Component({
	selector: 'app-testimonials-page',
	templateUrl: './testimonials-page.component.html',
	styleUrls: ['./testimonials-page.component.scss']
})
export class TestimonialsPageComponent implements OnInit {

	testimonyMock : Testimony[];
	constructor() {
		this.testimonyMock = [];
		this.testimonyMock[0] = new Testimony(
			"https://material.angular.io/assets/img/examples/shiba1.jpg",
			"Nancy Briggs",
			"Practitioner",
			"I now understand the power of Lorem ipsum for healing the body, mind and spirit. I'm very fortunate to connect with certified Lorem ipsum practitioner Nancy Briggs. My 13-year-old son had severe depression and also an invasive anxiety has plagued him.",
			new Date().getTime(),
			"Fear/ Phobia- Afraid to Drive"
		);
		this.testimonyMock[1] = new Testimony(
			"https://material.angular.io/assets/img/examples/shiba1.jpg",
			"Adreia Bin",
			"Member",
			"Quando recebi minha 1 sessão de enterprise no inicio da minha formação, a primeira coisa que me veio a cabeça foi...noooossaaa isso é magnifico e na mesma semana testei em meu filho de 8 anos que até então apresentava enurese noturna e já havia testado varias outras técnicas. Fazem 2 meses que fiz e com apenas 3 sessões essa questão dele já foi solucionada. Isso me mostra mais ainda que estou no caminho certo. Gratidão.",
			new Date().getTime(),
			"Maravilhoso"
		);
		this.testimonyMock[2] = new Testimony(
			"https://material.angular.io/assets/img/examples/shiba1.jpg",
			"Charlene Cooper",
			"Member",
			"I received this lovely email from the handler of one of the CARDA Search & Rescue canines, a group I volunteer with to aid in the release of secondary PTSD.",
			new Date().getTime(),
			"Search & Rescue Canine"
		);
		this.testimonyMock[3] = new Testimony(
			"https://material.angular.io/assets/img/examples/shiba1.jpg",
			"NOMBRE 4",
			"OCUPACIÓN 4",
			"I now understand the power of Lorem ipsum for healing the body, mind and spirit. I'm very fortunate to connect with certified Lorem ipsum practitioner Nancy Briggs. My 13-year-old son had severe depression and also an invasive anxiety has plagued him.",
			new Date().getTime(),
			"SECTOR 4"
		);
		this.testimonyMock[4] = new Testimony(
			"https://material.angular.io/assets/img/examples/shiba1.jpg",
			"NOMBRE 5",
			"OCUPACIÓN 5",
			"I now understand the power of Lorem ipsum for healing the body, mind and spirit. I'm very fortunate to connect with certified Lorem ipsum practitioner Nancy Briggs. My 13-year-old son had severe depression and also an invasive anxiety has plagued him.",
			new Date().getTime(),
			"SECTOR 5"
		);
	}

	ngOnInit(): void {
	}

}
