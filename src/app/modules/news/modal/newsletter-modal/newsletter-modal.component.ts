import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-newsletter-modal',
	templateUrl: './newsletter-modal.component.html',
	styleUrls: ['./newsletter-modal.component.scss']
})
export class NewsletterModalComponent implements OnInit {

	languages = ["Español", "English"];
	selectedLanguage = 0;
	howDidYouFindUs = ["Option 1", "Option 2", "Option 3"];
	selectedFind = 0;

	constructor() { }

	ngOnInit(): void {
	}

}
