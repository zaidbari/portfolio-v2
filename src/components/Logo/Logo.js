import styles from './Logo.module.scss'

export default function Logo () {
  return (
    <div className={ styles.logo_container }>
      <span className={ styles.logo }>LL</span>
      <span>Lafen Lesley portfolio.</span>
    </div>
  )


}
