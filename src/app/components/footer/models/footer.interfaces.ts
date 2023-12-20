import { GenericLabel } from "../../menu/models/menu.interface";

export interface Links {
  about: string;
  blog: string;
}

export interface Footer {
  brand: GenericLabel;
  rights: string;
  links: Links;
}
