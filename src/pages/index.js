import styles from "@/styles/Home.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

// this is the home page and it renders everything like the app.js in react and it's route is "/"

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud e
        </p>
        <p className={styles.text}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud e
        </p>
      </div>
      <Link href="/ninjas" className={styles.btn}>See ninjas listing </Link>
    </>
  );
}
