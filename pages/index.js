import DefaultLayout from '../Layout';
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <DefaultLayout>
      <div className={styles.container}>
        <h1>Prova titolo</h1>
      </div>
    </DefaultLayout>
  )
}
