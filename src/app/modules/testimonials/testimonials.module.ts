import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { ExampleMenuComponent } from './menus/example-menu/example-menu.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		TestimonialCardComponent,
		TestimonialsPageComponent,
		ExampleMenuComponent,
	],
	imports: [
		CommonModule,
		TestimonialsRoutingModule,
		MatCardModule,
		MatButtonModule
	]
})
export class TestimonialsModule { }
