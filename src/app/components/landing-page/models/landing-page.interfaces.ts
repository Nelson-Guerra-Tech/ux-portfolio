import { Color } from "../../types/common.types";

export interface GenericLabel {
  title: string;
  subtitle: string;
  label?: string;
}

export interface LandingPage {
  label: GenericLabel;
  descriptor: GenericLabel;
}
