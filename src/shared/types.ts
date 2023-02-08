export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export enum VariantTypes {
  Primary = "primary",
  Secondary = "secondary",
  Default = "default",
}

export enum Sizes {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
