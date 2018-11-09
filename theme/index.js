// Example theme.js
import { dark } from 'mdx-deck/themes'
import { white, black } from './colors'
import { Provider } from './provider'

export default {
  // extends the default theme
  ...dark,
  // add a custom font
  font: 'EuclidCircularB-Regular, sans-serif',
  heading: {
    fontWeight: 300,
    margin: 0,
    lineHeight: 1.4,
  },
  // // custom colors
  colors: {
    text: white,
    background: black,
    link: white,
  },
  Provider,
}
