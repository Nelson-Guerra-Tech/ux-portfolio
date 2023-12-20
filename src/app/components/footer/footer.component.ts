import { Component, Input } from "@angular/core";
import { FooterDate } from "./mocks/footer.mocks";
import { Footer } from "./models/footer.interfaces";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  @Input() content: Footer = FooterDate;
  faMedium = faMedium;
  faLinkedin = faLinkedin;
  faDribbble = faDribbble;
  faBehance = faBehance;
}
