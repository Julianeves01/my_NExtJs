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
          <Card className={styles.card} title="Por Que a Ansiedade Não Tem Nariz?" content= "A Ansiedade, uma das novas emoções em Divertida Mente 2, foi desenhada sem nariz, o que é um detalhe interessante e simbólico. A ausência do nariz pode representar como, em momentos de ansiedade, ficamos tão preocupados que parece que até esquecemos de respirar direito. Essa característica visual é uma forma divertida e criativa de mostrar como a Ansiedade pode ser uma emoção que aparece de repente e sem aviso, capturando nossa atenção totalmente." />

          <Card className={styles.card} title="Por que a Nojinho é verde?" content= "A cor verde da Nojinho é um clássico quando pensamos em coisas que não gostamos. Mas, mais do que isso, a Nojinho em Divertida Mente 2 também reflete como essa emoção nos ajuda a fazer escolhas, evitando aquilo que nos faz mal ou que simplesmente não combina conosco. Ela é uma emoção que nos protege de coisas indesejadas, ajudando Riley a navegar pelas situações sociais com mais confiança." />

          <Card className={styles.card} title="Por que a Raiva só usa roupa social?" content= "Raiva está sempre vestido de forma impecável, com roupas sociais que sugerem seriedade e controle. Essa escolha reflete como o Raiva é uma emoção que busca impor ordem e respeito, mesmo quando a situação parece fora de controle. As roupas sociais do Raiva mostram que ele quer ser levado a sério, e que, apesar de seu temperamento explosivo, ele desempenha um papel importante em garantir que Riley seja ouvida e respeitada." />
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