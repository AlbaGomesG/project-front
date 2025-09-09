"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./apiinfo.module.css";

export default function ApiInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <Image
                    src="/image/banner.jpg"
                    alt="Banner"
                    width={1920}
                    height={1080}
                    className={styles.imageBanner}
                />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>Conheça um pouco da API!☕</h2>
                <p className={styles.description}>A API Coffee é uma API que fornece uma lista básica de descrições e ingredientes usados nas bebidas de café mais populares. É uma api gratuita e pode ser utilizada por desenvolvedores para criar aplicações relacionadas a esse mundo do café.</p>
            </div>

                <h3 className={styles.titleInformation}>☕Atributos da nossa API:</h3>
                <div className={styles.line}></div>

            <div className={styles.attributes}> 
                <ul className={styles.list}>
                    <li className={styles.listItem}>📝 title</li>
                    <li className={styles.listItem}>📌 description</li>
                    <li className={styles.listItem}>🥤 ingredients</li>
                    <li className={styles.listItem}>☕ image</li>
                    <li className={styles.listItem}>🔖 id</li>
                </ul>
            </div>
            
            <h3 className={styles.titleInformation}>🔗 URL base usada para o axios/fetch</h3>
            <div className={styles.line}></div>
            <Link href="https://api.sampleapis.com/coffee" className={styles.url}>https://api.sampleapis.com/coffee</Link>

            <h3 className={styles.titleInformation}>🎲 Endpoint para buscar dados</h3>
            <div className={styles.line}></div>
            <div className={styles.urlEndpoints}>
            <Link href="https://api.sampleapis.com/coffee/hot" className={styles.url}>https://api.sampleapis.com/coffee/hot</Link>
            <Link href="https://api.sampleapis.com/coffee/iced" className={styles.url}>https://api.sampleapis.com/coffee/iced</Link>
            </div>
        </div>
    )
}