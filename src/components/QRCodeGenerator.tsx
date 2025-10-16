import React from "react";
import { QRCodeCanvas } from "qrcode.react";

type QRCodeGeneratorProps = {
  /** The value/text/URL to encode in the QR code */
  value: string;
  /** Size of the QR code in pixels (default: 128) */
  size?: number;
  /** Optional title shown below the QR code */
  label?: string;
  /** Background color */
  bgColor?: string;
  /** Foreground color */
  fgColor?: string;
  /** Add some rounded style and background wrapper */
  withCard?: boolean;
};

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  value,
  size = 200,
  label,
  bgColor = "#ffffff",
  fgColor = "#000000",
  withCard = true,
}) => {
  const qrCode = (
    <QRCodeCanvas
      value={value}
      size={size}
      bgColor={bgColor}
      fgColor={fgColor}
      includeMargin={true}
      style={{ borderRadius: "1rem" }}
    />
  );

  return withCard ? (
    <div className="inline-block bg-white p-6 rounded-3xl shadow-2xl text-center">
      {qrCode}
      {label && <div className="text-slate-600 mt-3">{label}</div>}
    </div>
  ) : (
    qrCode
  );
};

export default QRCodeGenerator;
