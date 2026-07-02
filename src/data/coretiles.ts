import { FaBriefcase, FaGraduationCap, FaPiggyBank } from "react-icons/fa";
export type CoreCardProps = {
  label: string;
  title: string;
  description: string;
  icon: React.ElementType;
  chips: string[];
  buttonText: string;
  link: string;
  glow: string;
  iconGradient: string;
  delay?: number;
};
export const coreCards = [
  {
    label: "APDS",
    title: "Teacher Salary Loan",
    description:
      "Flexible salary loan solutions designed specifically for teachers with simple requirements and convenient repayment options.",
    icon: FaGraduationCap,
    chips: ["Simple Requirements", "Salary Deduction", "Competitive Rates"],
    buttonText: "Apply Now",
    link: "/teachers-loan",
    glow: "bg-primary/10",
    iconGradient: "from-primary to-aspac-green",
  },
  {
    label: "DEPOSITS",
    title: "Savings & Time Deposit",
    description:
      "Secure and dependable savings products designed to help you build a stronger financial future.",
    icon: FaPiggyBank,
    chips: ["Safe & Secure", "Flexible Terms", "Competitive Returns"],
    buttonText: "Open an Account",
    link: "/savings",
    glow: "bg-aspac-green/10",
    iconGradient: "from-aspac-green to-primary",
  },
  {
    label: "BUSINESS",
    title: "MSME Loans",
    description:
      "Financing solutions that help local businesses grow, expand operations, and strengthen communities.",
    icon: FaBriefcase,
    chips: ["Working Capital", "Expansion Funding", "Fast Decisions"],
    buttonText: "Learn More",
    link: "/msme-loans",
    glow: "bg-yellow-300/10",
    iconGradient: "from-primary to-aspac-green",
  },
];