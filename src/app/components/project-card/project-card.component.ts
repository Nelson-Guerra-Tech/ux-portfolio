import { Component, Input } from "@angular/core";
import { Cards } from "./models/project-card.component.interfaces";
import { ProjectCardsMocks } from "./data/project-card.component.mocks";
import { CommonModule } from "@angular/common";
import { CardColorDirective } from "../directives/card-color/card-color.directive";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"],
  imports: [CommonModule, CardColorDirective],
  standalone: true,
})
export class ProjectCardComponent {
  @Input() content: Cards[] = ProjectCardsMocks;
}
