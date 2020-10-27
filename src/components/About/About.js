import Container from '../Container'
import { Heading } from '../Heading'

export default function About () {
  return (
    <Container>

      <Heading color="light">About.</Heading>
      <p style={ { marginBottom: 50 } }>
        My name is Lafen Lesley. I am a passionate Javascript developer and web
        enthusiast. I enjoy coding, and I'm a big fan of creative designs. I can
        bring your idea to life in style.
      </p>
      <img src="images/icons/electron.svg" alt="icon" style={ { marginRight: 20 } } width="100px" />
      <img src="images/icons/react.svg" alt="icon" style={ { marginRight: 20 } } width="100px" />
      <img src="images/icons/node.svg" alt="icon" style={ { marginRight: 20 } } width="80px" />

    </Container>
  )
}
