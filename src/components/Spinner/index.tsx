import { StyledSpinner } from "./styles";

interface SpinneProps {
  size: number | 32;
}

export default function Spinner({ size }: SpinneProps) {
  return <StyledSpinner size={size} />;
}
