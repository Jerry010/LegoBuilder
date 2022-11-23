import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponentComponent } from './components/item-component/item-component.component';
import { OverviewComponentComponent } from './components/overview-component/overview-component.component';
import { ApiService } from './services/api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponentComponent,
    OverviewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
