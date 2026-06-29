/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#001e40",
                "on-primary": "#ffffff",
                "primary-container": "#003366",
                "on-primary-container": "#799dd6",
                "inverse-primary": "#a7c8ff",
                "primary-fixed": "#d5e3ff",
                "primary-fixed-dim": "#a7c8ff",
                "on-primary-fixed": "#001b3c",
                "on-primary-fixed-variant": "#1f477b",

                "secondary": "#775a19",
                "on-secondary": "#ffffff",
                "secondary-container": "#fed488",
                "on-secondary-container": "#785a1a",
                "secondary-fixed": "#ffdea5",
                "secondary-fixed-dim": "#e9c176",
                "on-secondary-fixed": "#261900",
                "on-secondary-fixed-variant": "#5d4201",

                "tertiary": "#381300",
                "on-tertiary": "#ffffff",
                "tertiary-container": "#592300",
                "on-tertiary-container": "#d8885c",
                "tertiary-fixed": "#ffdbca",
                "tertiary-fixed-dim": "#ffb690",
                "on-tertiary-fixed": "#341100",
                "on-tertiary-fixed-variant": "#723610",

                "background": "#f9f9fe",
                "on-background": "#1a1c1f",

                "surface": "#f9f9fe",
                "surface-dim": "#dad9de",
                "surface-bright": "#f9f9fe",
                "surface-container-lowest": "#ffffff",
                "surface-container-low": "#f4f3f8",
                "surface-container": "#eeedf2",
                "surface-container-high": "#e8e8ed",
                "surface-container-highest": "#e2e2e7",
                "on-surface": "#1a1c1f",
                "on-surface-variant": "#43474f",
                "inverse-surface": "#2f3034",
                "inverse-on-surface": "#f1f0f5",
                "surface-variant": "#e2e2e7",
                "surface-tint": "#3a5f94",

                "outline": "#737780",
                "outline-variant": "#c3c6d1",

                "error": "#ba1a1a",
                "on-error": "#ffffff",
                "error-container": "#ffdad6",
                "on-error-container": "#93000a",

                "gold-glare": "#D4AF37",
                "ivory-base": "#F9F9F9",
                "charcoal-text": "#333333",
                "glass-overlay": "rgba(255, 255, 255, 0.7)"
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
                "full": "9999px"
            },
            spacing: {
                "section-gap-md": "80px",
                "section-gap-lg": "120px",
                "element-gap": "16px",
                "margin-mobile": "20px",
                "gutter": "24px",
                "container-max": "1280px"
            },
            fontFamily: {
                "display-hero": ["Playfair Display", "serif"],
                "display-hero-mobile": ["Playfair Display", "serif"],
                "headline-lg": ["Playfair Display", "serif"],
                "headline-md": ["Playfair Display", "serif"],
                "body-lg": ["Inter", "sans-serif"],
                "body-md": ["Inter", "sans-serif"],
                "label-caps": ["Inter", "sans-serif"]
            },
            fontSize: {
                "display-hero": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "display-hero-mobile": ["40px", { "lineHeight": "1.2", "fontWeight": "700" }],
                "headline-lg": ["48px", { "lineHeight": "1.2", "fontWeight": "600" }],
                "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
                "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "600" }]
            }
        }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/container-queries")
    ]
}
