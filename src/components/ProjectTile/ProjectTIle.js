import styles from './ProjectTile.module.scss';

export default function ProjecTile({ url }) {
  return <iframe src={url} frameBorder='0' height='100%' width='100%'></iframe>;
}
