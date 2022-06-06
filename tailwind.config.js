const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "2rem",
			},
			fontFamily: {
				sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
