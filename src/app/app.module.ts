import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProductModule } from './product/product.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DataserviceService } from './dataservice.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    ProductModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
