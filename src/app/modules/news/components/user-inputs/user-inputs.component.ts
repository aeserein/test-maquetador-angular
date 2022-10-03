import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-inputs',
	templateUrl: './user-inputs.component.html',
	styleUrls: ['./user-inputs.component.scss']
})
export class UserInputsComponent implements OnInit {

	languages = ["Español", "English", "All languages"];
	courses = ["Course_1", "Course_2", "Course_3"];
	breakpoint = 4;
	bigCol = 2;
	smallCol = 1;
	rowHeight = "100px";

	ngOnInit() {
		this.setSizes();
	}

	onSubmit($event:any) {
		$event.preventDefault();
	}

	setSizes() {
		if (window.innerWidth > 600) {
			this.breakpoint = 4;
			this.bigCol = 2;
			this.smallCol = 1;
			this.rowHeight = "100px";
		} else {
			this.breakpoint = 1;
			this.bigCol = 1;
			this.smallCol = 1;
			this.rowHeight = "65px";
		}
	}
}
