import Container from '../Container'
import Logo from '../Logo/Logo'
import styles from './Hero.module.scss'

export default function Hero () {
  return (
    <Container>
      <div className={ styles.hero }>

        <div>
          <span>Hello</span>
          <span>World!</span>
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </Container>
  )
}
