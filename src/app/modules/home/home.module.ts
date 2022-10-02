import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TestimonialsModule } from '../testimonials/testimonials.module';
import { NewsModule } from '../news/news.module';


@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		TestimonialsModule,
		NewsModule
	]
})
export class HomeModule { }
