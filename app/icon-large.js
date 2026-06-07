import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function IconLarge() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          background: "#0D1B2A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Soft glow */}
        <div
          style={{
            position: "absolute",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "rgba(27, 168, 126, 0.15)",
          }}
        />
        {/* Diamond */}
        <div
          style={{
            width: 190,
            height: 190,
            background: "#1BA87E",
            transform: "rotate(45deg)",
            borderRadius: 28,
          }}
        />
      </div>
    ),
    { width: 512, height: 512 }
  );
}
