import {useState} from "react";
import Button from "../../shared/Button";
import Introduction from "./Introduction";
import SetKeyForm from "./SetKeyForm";
import TryIt from "./TryIt";

function ProtectPage() {
  const [step, setStep] = useState(0);

  let page = <Introduction onNext={() => setStep(1)} />;

  if (step === 1) page = <SetKeyForm onNext={() => setStep(2)} />;
  if (step === 2) page = <TryIt />;

  return page;
}

export default ProtectPage;
