import { GenericLabel } from "../../landing-page/models/landing-page.interfaces";
import { Color } from "../../types/common.types";

export interface Image {
  src: string;
  alt: string;
}

export interface Cards {
  header: GenericLabel;
  image?: Image;
  color: Color;
  label: Color;
}
