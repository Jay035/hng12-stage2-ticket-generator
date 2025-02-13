import { useEffect, useRef, useState } from "react";
import JsBarcode from "jsbarcode";

export const BarcodeSVG = () => {
  const canvasRef = useRef(null);
  const [barcodeValue, setBarcodeValue] = useState("");

  useEffect(() => {
    const randomBarcode = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();
    setBarcodeValue(randomBarcode);

    if (canvasRef.current) {
      JsBarcode(canvasRef.current, randomBarcode, {
        format: "CODE128",
        displayValue: true,
        background: "transparent",
        lineColor: "#fff",
        height: 40,
      });
    }
  }, []);

  return (
    <div className="font-[family-name:var(--font-inter)]">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
