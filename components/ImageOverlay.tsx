import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Props {
  title: string;
  description: string;
  image: string;
  slug: string;
  overlayColor?: string;
  height?: number;
  buttonText?: string;
}

const ImageOverlay: React.FC<Props> = ({
  title,
  description,
  image,
  slug,
  overlayColor = "rgba(0, 0, 0, 0.4)",
  height = 300,
  buttonText,
}) => {
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleClick = () => {
    router.push(`/details/${slug}`);
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height,
        color: "white",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          background: overlayColor,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: fadeIn ? 1 : 0,
          transition: "opacity 1.2s ease-in",
        }}
      />
      <div
        style={{
          position: "relative",
          padding: "20px",
          opacity: fadeIn ? 1 : 0,
          transition: "opacity 1.4s ease-in",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          maxWidth: 600,
        }}
      >
        <h2 style={{ margin: 0, fontSize: "2.2rem" }}>{title}</h2>
        <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>{description}</p>
        {buttonText && (
          <button
            onClick={handleClick}
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              fontSize: "1rem",
              backgroundColor: "#ff6600",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              color: "white",
              alignSelf: "flex-start",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e65c00")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff6600")}
          >
            {buttonText}
          </button>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          div > div > h2 {
            font-size: 1.6rem !important;
          }
          div > div > p {
            font-size: 1rem !important;
          }
          button {
            font-size: 0.9rem !important;
            padding: 10px 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageOverlay;
