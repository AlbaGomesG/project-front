"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./apiinfo.module.css"

export default function ApiInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <h1 className={styles.title}>Um pouco mais sobre a nossa API</h1>
            </div>
        </div>
    )
}