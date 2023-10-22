export interface Menu {
  brand: string;
  links: Links;
}

export interface Links {
  home?: string;
  about: string;
  blog: string;
  contact?: string;
}
