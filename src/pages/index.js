import styles from "@/styles/Home.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Head from "next/head";

// this is the home page and it renders everything like the app.js in react and it's route is "/"

export default function Home() {
  return (
    <>
    {/* we can create our own metadata like the head which is imported from the next
    and we can set different properties to the head like title and all
     */}
     <Head>
      <title>Roshan List | Home</title>
      <meta name="keywords" content="ninjas"></meta>
     </Head>
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
