import { AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";

type ContactSchema = {
  method: string;
  value: string;
  href: string;
  icon: React.ReactNode;
};

export const contacts: ContactSchema[] = [
  {
    method: "Email",
    value: "alan@darkhorseadvisor.com",
    href: "mailto:alan@darkhorseadvisor.com",
    icon: <AiFillMail></AiFillMail>,
  },
  {
    method: "Phone",
    value: "714-394-0243",
    href: "tel:714-394-0243",
    icon: <AiFillPhone></AiFillPhone>,
  },
  {
    method: "LinkedIn",
    value: "/darkhorseadvisor",
    href: "https://www.linkedin.com/company/darkhorseadvisor/",
    icon: <AiFillLinkedin></AiFillLinkedin>,
  },
];
