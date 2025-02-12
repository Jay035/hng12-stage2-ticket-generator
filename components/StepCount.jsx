import { useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";

export function StepCount({ step }) {
  const [progress, setProgress] = useState(33.3);
const totalSteps = 3;
  const updateProgress = (step) => {
    if (step === 1) {
      setProgress(33.3);
    } else if (step === 2) {
      setProgress("66.6%");
    } else {
      setProgress("100%");
    }
  };

  useEffect(() => {
    updateProgress(step);
  }, [step]);

  return (
    <div className="">
      <p className="mb-3">Step {step}/{totalSteps}</p>
      <ProgressBar progress={progress} />
    </div>
  );
}
