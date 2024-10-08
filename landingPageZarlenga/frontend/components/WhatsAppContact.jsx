import { Box, Typography, keyframes } from "@mui/material";
import { useState, useRef } from "react";
import logo from "../public/assets/whatsAppLogo.png";

// Define keyframes for the slide-in animation
const slideIn = keyframes`
  from {
    
    opacity: 0;
    transform: translateX(-20px);

  }
  to {

    opacity: 1;
    transform: translateX(0);
  }
`;

export const WhatsAppContact = () => {
  const phoneNumber = "+541144952863";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const [hover, setHover] = useState(false);
  const elementRef = useRef(null);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Box
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        width: hover ? "170px" : "70px",
        height: "70px",
        borderRadius: "70px 70px 70px 20px",
        boxShadow: 3,
        p: 1,
        justifyContent: "center",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        transition: "width ease-in-out 0.3s",
        backgroundColor: hover ? "#00e676" : "#00c853",
      }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <img
          src={logo.src}
          alt="logo de whatsapp"
          style={{ width: 45, height: 45 }}
        />
        {hover && (
          <Typography
            sx={{
              ml: 1,
              flex: 1,
              color: "#fff",
              animation: `${slideIn} 0.3s ease-in-out`,
              textDecoration: "none",
            }}
          >
            Quiero contactarme
          </Typography>
        )}
      </a>
    </Box>
  );
};

export default WhatsAppContact;
