import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Attenomy",
    short_name: "Attenomy",
    description: "Developing innovative solutions for an everchanging world.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/logos/attenomy-squircle.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/logos/attenomy-squircle-dark.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logos/attenomy-squircle-light.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
