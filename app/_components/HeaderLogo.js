import Image from "next/image";
import logo from "@/public/logo.png"; // koristi SVG verziju

export default function HeaderLogo() {
  return (
    <div className="header-logo">
      <Image
        src={logo}
        alt="Frigomark logo"
        width={180} // osnovna širina
        height={60} // visina logotipa
        placeholder="blur"
        style={{
          maxWidth: "100%",
          height: "auto",
          transform: "scale(1.3)", // povećava prikaz bez menjanja headera
          transformOrigin: "center",
        }}
        priority
      />
    </div>
  );
}
