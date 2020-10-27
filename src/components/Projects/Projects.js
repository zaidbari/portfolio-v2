import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import ProjecTile from '../ProjectTile/ProjectTIle';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <div className={styles.container}>
      <h2>Projects.</h2>
      <div>
        <Carousel className={styles.carousel}></Carousel>
      </div>
    </div>
  );
}
