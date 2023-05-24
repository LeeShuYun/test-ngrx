import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//remember to import this 1.
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { MycounterComponent } from './counter/mycounter.component';
import { BannerComponent } from './nav/banner.component';
import { LandingComponent } from './main/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    MycounterComponent,
    BannerComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }) //remember to add this 2.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
