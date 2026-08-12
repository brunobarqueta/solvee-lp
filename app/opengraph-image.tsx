import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BACKGROUND = "#0A0A0B";
const ACCENT = "#C8FF3D";
const ACCENT2 = "#8B6BFF";
const FOREGROUND = "#F5F5F4";
const MUTED = "#9A9A9F";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: BACKGROUND,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="96" height="83" viewBox="-7.4 -17.4 142.8 122.8" fill="none">
            <path
              d="M10 0 H110 C98.954 0 90 8.954 90 20 C90 31.046 81.046 40 70 40 H10 C21.046 40 30 48.954 30 60 C30 71.046 38.954 80 50 80 H110"
              transform="translate(8,8)"
              stroke={ACCENT2}
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.75"
            />
            <path
              d="M10 0 H110 C98.954 0 90 8.954 90 20 C90 31.046 81.046 40 70 40 H10 C21.046 40 30 48.954 30 60 C30 71.046 38.954 80 50 80 H110"
              stroke={ACCENT}
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: FOREGROUND,
            }}
          >
            Solvee
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 36,
            color: MUTED,
          }}
        >
          Shopify development, no BS.
        </div>
      </div>
    ),
    { ...size }
  );
}
