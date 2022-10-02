import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ExampleModalComponent } from './modal/example-modal/example-modal.component';
import { NewsletterModalComponent } from './modal/newsletter-modal/newsletter-modal.component';
import { UserInputsComponent } from './components/user-inputs/user-inputs.component';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NewsListComponent } from './components/news-list/news-list.component';
import { SubscribeNewsletterComponent } from './components/subscribe-newsletter/subscribe-newsletter.component';

@NgModule({
	declarations: [
		NewsPageComponent,
		ArticlePageComponent,
		ArticleCardComponent,
		ExampleModalComponent,
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
		MatSelectModule
	],
	exports: [
		NewsPageComponent
	]
})
export class NewsModule { }
