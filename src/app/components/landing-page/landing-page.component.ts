import { Component, Input } from "@angular/core";
import { LandingPage } from "./models/landing-page.interfaces";
import { LandingPageData } from "./data/landing-page.mocks";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent {
  @Input() content: LandingPage = LandingPageData;
}
