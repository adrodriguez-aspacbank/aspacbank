import {
  FaPiggyBank,
  FaUniversity,
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
} from "react-icons/fa";
export interface Service {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  badge?: string;
}

export const services: Service[] = [
  { 
    title: "Deposit Account", 
    description: "Grow and secure your savings with high-yield interest and zero hassle.",
    Icon: FaPiggyBank, 
    link: "/deposit-account" 
  },
  {
    title: "Tuition Fee Collection",
    description: "Seamless school payments automated safely for institutions & parents.",
    Icon: FaUniversity,
    link: "/tuition-fee-collection",
  },
  { 
    title: "Bills Payment", 
    description: "Settle your utility and dynamic bills instantly from anywhere.",
    Icon: FaMoneyCheckAlt, 
    link: "/bills-payment" 
  },
  { 
    title: "Loans", 
    description: "Specialized APDS Teacher salary loans designed to elevate your future.",
    Icon: FaHandHoldingUsd, 
    link: "/loans",
    badge: "Popular"
  },
];