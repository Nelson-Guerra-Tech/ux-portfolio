export interface Icon {
  src: string;
  alt: string;
}

export interface Link {
  url: string;
  icon: Icon;
}

export interface Contact {
  description: string;
  link: Link;
}
