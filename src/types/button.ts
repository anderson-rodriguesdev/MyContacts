import { ReactNode } from "react";

export default interface ButtonProps {
  type?: "submit" | "reset" | "button";
  disabled?: boolean | false;
  isLoading?: boolean | false;
  onClick?: () => void;
  danger?: boolean;
  children: ReactNode;
}
