import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { AboutData } from "./data/about.mocks";
import { About } from "./models/about.interfaces";
import * as AOS from "aos";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements AfterViewInit {
  @Input() content: About = AboutData;

  ngAfterViewInit() {
    AOS.init();
  }
}
