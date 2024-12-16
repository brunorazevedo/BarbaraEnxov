import { createStitches } from '@stitches/react'

export const { styled, globalCss, keyframes, getCssText, theme } = createStitches({
    theme: {
        colors: {
            brownDark900: "#451A03",
            brownDark: "#685A4F",
            brownLight: "#C3BBAE",
            white: "#ffffff",
            brownLight100: "#E7E5E4",
            gray: "#626262",
            amber950: '#b45309',
            brownPrimary: '#8b5e34',
            stone100: '#E7E5E4',
        }
    },
    media: {
        lgScreen: '(max-width: 1200px)',
        lg: '(max-width: 977px)',
        tablet: '(max-width: 768px)',
        mobile: '(max-width: 600px)',
    },

})