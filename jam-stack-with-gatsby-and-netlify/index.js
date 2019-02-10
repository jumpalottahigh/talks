import Intro from './sections/01-intro.mdx'
import JAMstack from './sections/02-jamstack.mdx'
import Netlify from './sections/03-netlify.mdx'
import Gatsby from './sections/04-gatsby.mdx'
import Payoff from './sections/05-payoff.mdx'
import Future from './sections/06-future.mdx'
import Resources from './sections/07-resources.mdx'

export { default as theme } from './theme'

export default [
  ...Intro,
  ...JAMstack,
  ...Netlify,
  ...Gatsby,
  ...Payoff,
  ...Future,
  ...Resources
]
