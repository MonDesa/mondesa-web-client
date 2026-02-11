import type { Config } from "@react-router/dev/config";

export default {
  // Pre-render routes for SEO
  async prerender() {
    return [
      "/",
      "/team",
      "/mondesa",
      "/projects",
      "/projects/landslide",
      "/projects/enemeter",
      "/projects/enoe",
      "/projects/fireRiskPredictor",
      "/contact",
    ];
  },
  ssr: false,
} satisfies Config;
