import { useState } from "react";

type QrImageProps = {
  size?: number;
  className?: string;
  alt?: string;
};

const fallbackSources = [
  "/lovable-uploads/qrCode.png",
];

const QrImage = ({ size = 80, className = "", alt = "QR code" }: QrImageProps) => {
  const [srcIndex, setSrcIndex] = useState<number>(-1);
  const currentSrc = srcIndex < 0 ? "/qr-code.png" : fallbackSources[srcIndex] || "/qr-code.png";

  return (
    <img
      src={currentSrc}
      alt={alt}
      width={size}
      height={size}
      onError={() => setSrcIndex((i) => i + 1)}
      className={`object-contain border border-primary/20 rounded bg-white ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default QrImage;


