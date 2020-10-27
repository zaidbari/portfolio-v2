import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Container from '../Container'
import { Heading } from '../Heading'
import styles from './Projects.module.scss'

export default function Projects () {
  return (
    <Container>
      <Heading color="dark">Projects.</Heading>
      <div>
        <Carousel className={ styles.carousel }></Carousel>
      </div>
    </Container>
  )
}
