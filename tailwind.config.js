module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                kwekker: {
                    purple: {
                        dark: '#0b2a00',
                        mediumdark: '#0a4f18',
                        medium: '#063925',
                        mediumlight: '#6e9f53',
                        light: '#439921',
                        lightest: '#c3e895',
                    }
                }
            }
        },
    },
    plugins: [],
}
