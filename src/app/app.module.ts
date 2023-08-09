import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { QuickInfoComponent } from './quick-info/quick-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePictureComponent,
    SocialLinksComponent,
    AboutMeComponent,
    QuickInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
