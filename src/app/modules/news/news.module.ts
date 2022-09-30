import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';

// Pages
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

// Components
import { ArticleCardComponent } from './components/article-card/article-card.component';

// Modals
import { ExampleModalComponent } from './modal/example-modal/example-modal.component';
import { NewsletterModalComponent } from './modal/newsletter-modal/newsletter-modal.component';

// Menus


@NgModule({
  declarations: [
    NewsPageComponent,
    ArticlePageComponent,
    ArticleCardComponent,
    ExampleModalComponent,
    NewsletterModalComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
