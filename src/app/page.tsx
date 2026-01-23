import { Suspense } from "react";
import { CryptoCardList } from "@/components/crypto-card-list/CryptoCardList";
import { Loading } from "@/components/common/loading/Loading";
import { CRYPTO_METADATA } from "@/constants/crypto";
import { HomePageLabels } from "./page.labels";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{HomePageLabels.title}</h1>
          <p className={styles.subtitle}>{HomePageLabels.subtitle}</p>
        </header>
        <Suspense fallback={<Loading />}>
          <CryptoCardList cryptoIds={Object.keys(CRYPTO_METADATA)} />
        </Suspense>
      </div>
    </main>
  );
}
