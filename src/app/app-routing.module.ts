
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IntroComponent } from './intro/intro.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { SocialComponent } from './social/social.component';
import { TestomonialComponent } from './testomonial/testomonial.component';
import { ContentComponent } from './content/content.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'about',
    component: IntroComponent
  },
  {
    path: 'social',
    component: SocialComponent
  },
  {
    path: 'testomonial',
    component: TestomonialComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
