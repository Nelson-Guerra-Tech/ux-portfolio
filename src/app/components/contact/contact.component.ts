import { AfterViewInit, Component, Input } from "@angular/core";
import { ContactData } from "./data/contact.mocks";
import { Contact } from "./models/contact.interfaces";
import * as AOS from "aos";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements AfterViewInit {
  @Input() contact: Contact = ContactData;
  arrow = faArrowRight;

  ngAfterViewInit() {
    AOS.init();
  }
}
