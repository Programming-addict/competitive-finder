/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "inverse-on-surface": "#999e9c",
        "outline": "#727d7b",
        "tertiary": "#865400",
        "on-error": "#fff7f6",
        "primary-container": "#89f5e7",
        "surface-container-highest": "#d9e5e2",
        "on-surface": "#2a3433",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#d1dcd9",
        "on-background": "#2a3433",
        "error-container": "#fa746f",
        "on-primary": "#e2fff9",
        "secondary": "#4a4bd7",
        "on-primary-fixed": "#004841",
        "on-primary-container": "#005c54",
        "secondary-dim": "#3d3dcb",
        "on-secondary-container": "#3b3cc9",
        "on-tertiary-container": "#4a2c00",
        "surface": "#f6faf8",
        "surface-container-high": "#e1eae7",
        "primary": "#006b62",
        "on-primary-fixed-variant": "#00675e",
        "surface-bright": "#f6faf8",
        "on-secondary-fixed": "#2622b7",
        "tertiary-fixed": "#f8a010",
        "on-tertiary-fixed": "#2a1700",
        "secondary-container": "#e1e0ff",
        "error": "#a83836",
        "background": "#f6faf8",
        "on-error-container": "#6e0a12",
        "surface-variant": "#d9e5e2",
        "inverse-surface": "#0a0f0e",
        "on-surface-variant": "#56615f",
        "surface-container-low": "#eef5f3",
        "tertiary-container": "#f8a010",
        "on-secondary": "#fbf7ff",
        "surface-container": "#e7f0ed",
        "primary-fixed": "#89f5e7",
        "secondary-fixed": "#e1e0ff",
        "primary-fixed-dim": "#7ae7d8",
        "tertiary-dim": "#764900",
        "error-dim": "#67040d",
        "outline-variant": "#a9b4b1",
        "on-tertiary-fixed-variant": "#563400",
        "secondary-fixed-dim": "#d1d0ff",
        "on-tertiary": "#fff7f3",
        "on-secondary-fixed-variant": "#4647d3",
        "inverse-primary": "#91feef",
        "primary-dim": "#005e56",
        "surface-tint": "#006b62",
        "tertiary-fixed-dim": "#e79400"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "1.5rem",
        full: "9999px"
      },
      fontFamily: {
        headline: ["var(--font-plus-jakarta-sans)"],
        body: ["var(--font-inter)"],
        label: ["var(--font-inter)"]
      }
    }
  }
};