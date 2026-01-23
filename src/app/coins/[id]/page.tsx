import { Suspense } from "react";
import { BackButton } from "@/components/common/back-button/BackButton";
import { CoinDetail } from "@/components/coin-detail/CoinDetail";
import { Loading } from "@/components/common/loading/Loading";
import styles from "./page.module.css";

interface CoinPageProps {
  params: Promise<{ id: string }>;
}

export default async function CoinPage({ params }: CoinPageProps) {
  const { id } = await params;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.backButton}>
          <BackButton />
        </div>
        <Suspense fallback={<Loading />}>
          <CoinDetail coinId={id} />
        </Suspense>
      </div>
    </main>
  );
}
