import { FaMapMarkerAlt } from "react-icons/fa";

 export type NewsItem = {
    title: string;
    content: string;
    label: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconColor: string;
    to?: string;
    mediaType?: "video" | "image";
    mediaSrc?: string;
    mediaAlt?: string;
  };

  export const news: NewsItem[] = [
    {
      title: "ASPAC Bank Consolacion Moves to a New Building",
      content:
        "We are pleased to announce that ASPAC Bank Consolacion is now operating in its new building at Sta. Lucia Town Center, Poblacion Oriental.",
      label: "Branch Update",
      Icon: FaMapMarkerAlt as React.ComponentType<
        React.SVGProps<SVGSVGElement>
      >,
      iconColor: "text-primary",
      to: "https://www.google.com/maps/place/ASPAC+Rural+Savings+Bank/@10.373832,123.958717,18z",
      mediaType: "video",
      mediaSrc: "/assets/vid/cnsvid3.webm",
      mediaAlt: "ASPAC Bank Consolacion branch feature video",
    },
  ];