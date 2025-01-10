import localFont from "next/font/local";

// Integral CF Font Integration
export const integralCF = localFont({
  src: [
    {
      path: "./integralcf/IntegralCF-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./integralcf/IntegralCF-BoldOblique.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./integralcf/IntegralCF-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./integralcf/IntegralCF-DemiBoldOblique.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./integralcf/IntegralCF-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./integralcf/IntegralCF-ExtraBoldOblique.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "./integralcf/IntegralCF-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./integralcf/IntegralCF-HeavyOblique.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./integralcf/IntegralCF-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./integralcf/IntegralCF-MediumOblique.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./integralcf/IntegralCF-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./integralcf/IntegralCF-RegularOblique.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-integralCF",
});

// Satoshi Font Integration
export const satoshi = localFont({
  src: [
    { path: "./satoshi/Satoshi-Black.woff2", weight: "900", style: "normal" },
    { path: "./satoshi/Satoshi-BlackItalic.woff2", weight: "900", style: "italic" },
    { path: "./satoshi/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./satoshi/Satoshi-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./satoshi/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./satoshi/Satoshi-Italic.woff2", weight: "400", style: "italic" },
    { path: "./satoshi/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./satoshi/Satoshi-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./satoshi/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "./satoshi/Satoshi-LightItalic.woff2", weight: "300", style: "italic" },
  ],
  fallback: ["sans-serif"],
  variable: "--font-satoshi",
});
