type AboutMeSchema = { name: string; imageUrl: string };

export const aboutMe: AboutMeSchema[] = [
  {
    name: "Competitive Biking",
    imageUrl: "/images/biking.jpg",
  },
  {
    name: "Surfing",
    imageUrl: "/images/surfing.jpg",
  },
];

type ExperienceItem = {
  title: string;
  organization: string;
  date: string;
};

export const experienceTimeline: ExperienceItem[] = [
  {
    title: "Managing Partner",
    organization: "Clearview Investment Partners LLC",
    date: "May 2009 – Present",
  },
  {
    title: "Vice President - Investments",
    organization: "UBS Wealth Management",
    date: "June 2002 – May 2009",
  },
  {
    title: "Vice President - Investments",
    organization: "A.G. Edwards",
    date: "June 1997 – June 2002",
  },
  {
    title: "Financial Consultant",
    organization: "Smith Barney",
    date: "October 1993 – June 1997",
  },
];
