import { Component, OnInit } from '@angular/core';
import { Testimony } from '../../classes/testimony';

@Component({
	selector: 'app-testimonials-page',
	templateUrl: './testimonials-page.component.html',
	styleUrls: ['./testimonials-page.component.scss']
})
export class TestimonialsPageComponent implements OnInit {

	testimonyMock : Testimony;
	constructor() {
		this.testimonyMock = new Testimony(
			"https://material.angular.io/assets/img/examples/shiba1.jpg",
			"Nancy Briggs",
			"Practitioner",
			"I now understand the power of Lorem ipsum for healing the body, mind and spirit. I'm very fortunate to connect with certified Lorem ipsum practitioner Nancy Briggs. My 13-year-old son had severe depression and also an invasive anxiety has plagued him.",
			new Date().getTime(),
			"Fear/ Phobia- Afraid to Drive"
		);
	}

	ngOnInit(): void {
	}

}
