import Intro from './sections/01-intro.mdx'
import JAMstack from './sections/02-jamstack.mdx'
import Netlify from './sections/03-netlify.mdx'
import Gatsby from './sections/04-gatsby.mdx'
import Conclusion from './sections/05-conclusion.mdx'

export { default as theme } from './theme'

export default [...Intro, ...JAMstack, ...Netlify, ...Gatsby, ...Conclusion]
