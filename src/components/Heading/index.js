import styles from './Heading.module.scss'

export const Heading = ({ children, color }) => <h1 className={ color === 'light' ? styles.head__light : styles.head__dark }>	{ children }	</h1>

