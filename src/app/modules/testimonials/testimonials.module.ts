import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [
		TestimonialCardComponent,
		TestimonialsPageComponent,
	],
	imports: [
		CommonModule,
		TestimonialsRoutingModule,
		MatCardModule,
		MatButtonModule,
		CarouselModule,
		FontAwesomeModule,
	],
	exports: [
		TestimonialsPageComponent
	]
})
export class TestimonialsModule { }
