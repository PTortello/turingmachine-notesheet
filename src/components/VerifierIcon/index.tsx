import check from "assets/images/check.svg";
import close from "assets/images/close.svg";

interface VerifierIconProps {
  verification: string;
}

function VerifierIcon({ verification }: VerifierIconProps) {
  const icons: { [key: string]: string } = {
    close: close,
    check: check,
  };

  return icons[verification] && <img src={icons[verification]} />;
}

export default VerifierIcon;
