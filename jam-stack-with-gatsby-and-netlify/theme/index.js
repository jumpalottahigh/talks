// import { big as theme } from 'mdx-deck/themes'
// import { book as theme } from 'mdx-deck/themes' // Keep this as one lighter theme version
// import { condensed as theme } from 'mdx-deck/themes' // Black background dark theme
import { default as theme } from 'mdx-deck/themes'

export default {
  ...theme,
  colors: {
    ...theme.colors
  },
  link: {
    textDecoration: 'none'
  },
  css: {
    fontSize: '18px',
    '@media screen and (min-width: 64em)': {
      fontSize: '32px'
    }
  }

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
}
