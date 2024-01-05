import { Component, Input, OnInit } from "@angular/core";
import { LandingPage } from "./models/landing-page.interfaces";
import { LandingPageData } from "./data/landing-page.mocks";
import * as AOS from "aos";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  @Input() content: LandingPage = LandingPageData;

  ngOnInit() {
    AOS.init();
  }
}
