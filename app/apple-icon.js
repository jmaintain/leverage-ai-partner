import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#0D1B2A",
          borderRadius: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer glow ring */}
        <div
          style={{
            position: "absolute",
            width: 88,
            height: 88,
            borderRadius: "50%",
            background: "rgba(27, 168, 126, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        {/* Diamond shape */}
        <div
          style={{
            width: 64,
            height: 64,
            background: "#1BA87E",
            transform: "rotate(45deg)",
            borderRadius: 10,
          }}
        />
      </div>
    ),
    { width: 180, height: 180 }
  );
}
