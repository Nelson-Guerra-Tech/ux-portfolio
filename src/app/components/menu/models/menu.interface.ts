export interface GenericLabel {
  title: string;
  subtitle: string;
}

export interface Menu {
  label: GenericLabel;
  links: Links;
}

export interface Links {
  about: string;
  blog: string;
}
