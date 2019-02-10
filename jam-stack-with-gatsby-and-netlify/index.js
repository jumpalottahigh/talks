import Intro from './sections/01-intro.mdx'
import JAMstack from './sections/02-jamstack.mdx'
import Why from './sections/03-why.mdx'
import Showcase from './sections/04-showcase.mdx'
import Payoff from './sections/05-payoff.mdx'
import Future from './sections/06-future.mdx'
import Resources from './sections/07-resources.mdx'

export { default as theme } from './theme'

export default [
  ...Intro,
  ...JAMstack,
  ...Why,
  ...Showcase,
  ...Payoff,
  ...Future,
  ...Resources
]
