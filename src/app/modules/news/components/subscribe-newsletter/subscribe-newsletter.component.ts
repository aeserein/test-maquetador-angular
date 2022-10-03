import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsletterModalComponent } from '../../modal/newsletter-modal/newsletter-modal.component';

@Component({
	selector: 'app-subscribe-newsletter',
	templateUrl: './subscribe-newsletter.component.html',
	styleUrls: ['./subscribe-newsletter.component.scss'],
	animations: [
		trigger("hoverAnimation", [
			state("hover", style({
				backgroundColor: "#90B8FF"
			})),
			transition("* => hover", animate("0.2s ease-out")),
			transition("hover => *", animate("0.2s ease-in")),

		])
	]
})
export class SubscribeNewsletterComponent {

	bHover = false;

	constructor(public dialog: MatDialog) {}

	openDialog() {
		const dialogRef = this.dialog.open(NewsletterModalComponent, {
			width: "700px"
		});
	
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

	get hoverState() : string {
		console.log("hoverstate");
		
		return this.bHover ? "hover" : "normal";
	}

}