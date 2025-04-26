
import {
    HomeIcon,
    QuestionMarkCircleIcon,
    UserIcon,
  } from "@heroicons/react/20/solid";
  import { AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";
  import type { IconType } from "react-icons";
  
  type NavItem = {
    name: string;
    href: string;
    icon: (props: React.ComponentProps<"svg">) => any;
  };
  
  type FooterLink = {
    name: string;
    href: string;
  };
  
  type SocialLink = {
    name: string;
    href: string;
    icon: IconType;
    event: string;
  };
  
  export const navigation: NavItem[] = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Services", href: "/#services", icon: QuestionMarkCircleIcon },
    { name: "About", href: "/about", icon: UserIcon },
  ];
  
  export const footer_links: {
    main: FooterLink[];
    social: SocialLink[];
  } = {
    main: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/#services" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      {
        name: "Email",
        href: "mailto:alan@darkhorseadvisor.com",
        icon: AiFillMail,
        event: "clicked_email",
      },
      {
        name: "Phone",
        href: "tel:714-394-0243",
        icon: AiFillPhone,
        event: "clicked_phone",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/darkhorseadvisor/about/",
        icon: AiFillLinkedin,
        event: "clicked_linkedin",
      },
    ],
  };