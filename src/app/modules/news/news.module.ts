import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { NewsletterModalComponent } from './modal/newsletter-modal/newsletter-modal.component';
import { UserInputsComponent } from './components/user-inputs/user-inputs.component';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NewsListComponent } from './components/news-list/news-list.component';
import { SubscribeNewsletterComponent } from './components/subscribe-newsletter/subscribe-newsletter.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		NewsPageComponent,
		ArticleCardComponent,
		NewsletterModalComponent,
  		UserInputsComponent,
		NewsListComponent,
		SubscribeNewsletterComponent
	],
	imports: [
		CommonModule,
		NewsRoutingModule,
		MatGridListModule,
		MatInputModule,
		MatIconModule,
		MatSelectModule,
		MatCardModule,
		MatDialogModule,
		MatButtonModule
	],
	exports: [
		NewsPageComponent
	]
})
export class NewsModule { }
