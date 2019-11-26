// app modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule , RoutingComponent} from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './shared/user.service';



// auth  guard
import { AuthGuard } from './auth.guard';
import { HttpInterceptProvider } from './index';




@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
     HttpInterceptProvider,
     AuthGuard,
     UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
