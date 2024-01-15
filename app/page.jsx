import Link from "next/link";
import styles from "./ui/login/login.module.css";

const Homepage = () => {
  return (
    <div className={styles.container2}>
      <Link href={"/dashboard/users"}>
        <h2>HOME PAGE</h2>
      </Link>

      <Link href={"/dashboard"}>
        <button className={styles.btn}>go to admin</button>
      </Link>
    </div>
  );
};

export default Homepage;
