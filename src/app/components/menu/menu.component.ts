import { Component, Input } from "@angular/core";
import { MenuData } from "./data/menu.data";
import { Menu } from "./models/menu.interface";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  @Input() content: Menu = MenuData;
  document: Document = document;

  constructor(private router: Router) {}

  navigateToAbout(): void {
    this.router.navigate(["/about"], { fragment: "about" }).then(() => {
      setTimeout(() => {
        const element = document.querySelector("#aboutSection");
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100, // Adjust this value as needed
            behavior: "smooth",
          });
        }
      }, 0);
    });
  }
}
