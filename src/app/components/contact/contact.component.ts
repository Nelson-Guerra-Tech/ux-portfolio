import { Component, Input } from "@angular/core";
import { ContactData } from "./data/contact.mocks";
import { Contact } from "./models/contact.interfaces";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  @Input() contact: Contact = ContactData;
}
