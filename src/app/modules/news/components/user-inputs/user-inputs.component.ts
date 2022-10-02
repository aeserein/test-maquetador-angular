import { Component } from '@angular/core';

@Component({
	selector: 'app-user-inputs',
	templateUrl: './user-inputs.component.html',
	styleUrls: ['./user-inputs.component.scss']
})
export class UserInputsComponent {

	languages = ["Español", "English", "All languages"];
	selectedLanguage = 0;
	courses = ["Course_1", "Course_2", "Course_3"];
	selectedCourse = 0;

	constructor() {
	}
}
