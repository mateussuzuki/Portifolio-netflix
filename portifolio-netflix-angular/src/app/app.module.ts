import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';
import { FelipeAlvarengaComponent } from './components/profile/felipe-alvarenga/felipe-alvarenga.component';
import { MateusSuzukiComponent } from './components/profile/mateus-suzuki/mateus-suzuki.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileScreenComponent,
    FelipeAlvarengaComponent,
    MateusSuzukiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
