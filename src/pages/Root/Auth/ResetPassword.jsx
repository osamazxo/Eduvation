import React, { useState } from "react";
import AuthTemplate from "./components/AuthTemplate";
import EmailStep from "./components/EmailStep";
import ConfirmCode from "./components/ConfirmCode";
import NewPassword from "./components/NewPassword";

const ResetPassword = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const currentTab = [
    <EmailStep setCurrentStep={setCurrentStep} />,
    <ConfirmCode setCurrentStep={setCurrentStep} />,
    <NewPassword setCurrentStep={setCurrentStep} />,
  ];
  return <AuthTemplate>{currentTab[currentStep]}</AuthTemplate>;
};

export default ResetPassword;
