import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewsletterModalComponent } from '../../modal/newsletter-modal/newsletter-modal.component';

@Component({
	selector: 'app-subscribe-newsletter',
	templateUrl: './subscribe-newsletter.component.html',
	styleUrls: ['./subscribe-newsletter.component.scss']
})
export class SubscribeNewsletterComponent {

	constructor(public dialog: MatDialog) {}

	openDialog() {
		const dialogRef = this.dialog.open(NewsletterModalComponent, {
			width: "700px"
		});
	
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

}