import styles from "@/styles/Home.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Home page</h1>
        <p>This is the about page</p>
        <p>This is the about page</p>
      </div>
      <Footer />
    </>
  );
}
