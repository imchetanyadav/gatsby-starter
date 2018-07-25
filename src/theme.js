import './styles/main.scss'

export const breakpoints = [32, 48, 64, 80].map(n => n + 'em')

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]

export const fontWeights = {
  lighter: 100,
  light: 200,
  normal: 400,
  regular: 500,
  bold: 600
}

export const colors = Object.assign({}, {
  auyl: '#0A5B2D',
  secondary: '#96E0A9',
  primary: '#0A5B2D',
  link: '#00C9C5',

  black: '#000',
  white: '#fff',
  grey: '#f1f1f1',
  greyDark: '#848484'
})


export const fonts = {
  primary: "'Montserrat', sans-serif;",
  secondary: "'Open Sans', sans-serif"
}

export default {
  colors,
  fonts,
  fontSizes,
  breakpoints,
  fontWeights,
  space
};