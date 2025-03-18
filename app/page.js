import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.article}>
          <Card className={styles.card} title="Card 1" content= "this is card 1" />
          <Card className={styles.card} title="Card 2" content= "this is card 2" />
          <Card className={styles.card} title="Card 3" content= "this is card 3" />
        </div>
        <aside className={styles.aside}>
          <div className={styles.divertidamente}>
            <img src="/divertidamente.jpg" alt="Divertidamente" />
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}