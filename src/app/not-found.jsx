import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <h1>🔍 A página que você está procurando não foi encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe ou está em construção.</p>
            <div className={styles.actions}>
            <Link className={styles.link} href="/">Voltar para a página inicial</Link>
            </div>
            </div>
        </div>
    )
}