import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MenuComponent } from "./components/menu/menu.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { ProjectCardComponent } from "./components/project-card/project-card.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ProjectCardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
