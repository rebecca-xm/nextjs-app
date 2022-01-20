import Link from "next/link";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>GALLERY</a>
            </Link>
          </li>
          <li>
            <Link href="/experiment">
              <a>ESPERIMENTI</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.content}>{children}</div>
    </>
  );
}

export default DefaultLayout;