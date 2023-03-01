import { Container } from "./styles";

import xCircleIcon from "../../../assets/images/icons/x-circle.svg";
import checkCircleIcon from "../../../assets/images/icons/check-circle.svg";

interface ToastMessageProps {
  text: string;
  type: "default" | "success" | "danger";
}

export default function ToastMessage({ text, type }: ToastMessageProps) {
  return (
    <Container type={type}>
      {type === "danger" && <img src={xCircleIcon} alt="Error Icon" />}
      {type === "success" && <img src={checkCircleIcon} alt="Success Icon" />}
      <strong>{text}</strong>
    </Container>
  );
}
