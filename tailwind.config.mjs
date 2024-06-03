/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#0D0C22",
      stone: "#231F20",
      lime: "#B9FF66",
      navy: "#192F85",
      orange: "#E76915",
      zinc: {
        100: "#F3F3F3",
        200: "#F0F0F0",
        300: "#D9D9D9",
        400: "#D8D8D8",
        500: "#898989",
        600: "#B0B0B0",
        700: "#787878",
        800: "#292A32",
        900: "#192F85",
      },
    },
    boxShadow: {
      card: "0px 5px 0px 0px #191A23",
    },
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Ubuntu", "ubuntu", "sans-serif"],
      },
			colors: {
				bitcoinbay: {
					orange: {
						50: "#fff9ed",
						100: "#fff2d5",
						200: "#ffe1a9",
						300: "#feca73",
						400: "#fda83a",
						DEFAULT: "#FB890C",
						600: "#ec710a",
						700: "#c4550a",
						800: "#9b4311",
						900: "#7d3911",
						950: "#7d3911"
					},
					yellow: {
						50: "#ffffe7",
						100: "#ffffc1",
						200: "#fffb86",
						300: "#fff041",
						400: "#ffe00d",	
						DEFAULT: "#FFD100",
						600: "#d19900",
						700: "#a66d02",
						800: "#89550a",
						900: "#74450f",
						950: "#442404",
					},
					blue: {
						50: "#eef5ff",
						100: "#d9e9ff",
						200: "#bcd9ff",
						300: "#8ec1ff",
						400: "#599fff",
						500: "#3279ff",
						600: "#1b58f5",
						700: "#1443e1",
						800: "#1737b6",
						DEFUALT: "#173085",
						950: "#142157"
					},
					red: {
						50: "#fef3f2",
						100: "#fde5e3",
						200: "#fcd0cc",
						300: "#f9aea8",
						400: "#f37f76",
						500: "#e9564a",
						DEFAULT: "#C83327",
						700: "#b42c21",
						800: "#95281f",
						900: "#7c2720",
						950: "#43100c"
					}
				}
			}
    },
  },
};
