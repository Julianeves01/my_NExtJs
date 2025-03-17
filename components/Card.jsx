import styles from "../styles/Card.module.css";

export default function Card({ title, content }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{title}</h2>
                <p>{content}</p>
        </div>
    );
}