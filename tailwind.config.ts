import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradiantbg:
          "linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0.3) 10%, hsl(0, 0%, 0%) 100%)",
        
      },
      textColor: {herobg:
        "linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(255, 124, 1) 70%)",},
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        scroll: "scroll forwards 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
