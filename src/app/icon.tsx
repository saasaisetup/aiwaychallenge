import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          borderRadius: "16px",
          border: "2px solid #faff69",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            fontFamily: "monospace",
            color: "#faff69",
            letterSpacing: "-1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          AW
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
