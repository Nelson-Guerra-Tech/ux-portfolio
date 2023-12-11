import { Directive, HostBinding, Input } from "@angular/core";
import { Color } from "../../types/common.types";

@Directive({
  selector: "[cardColor]",
  standalone: true,
})
export class CardColorDirective {
  @Input("cardColorBackground") color: Color = "gold";
  @Input("cardColorLabel") cardColorLabel: Color = "night";

  @HostBinding("class") get createWrapperClasses() {
    return (
      "card-color" +
      this.createColor(this.color) +
      this.createLabelColor(this.cardColorLabel)
    );
  }

  createColor(color: Color) {
    return " card-color-background-" + color;
  }

  createLabelColor(color: Color) {
    return " card-color-label-" + color;
  }
}
