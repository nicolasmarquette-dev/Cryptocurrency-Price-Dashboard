"use client";

import { useRouter } from "next/navigation";
import { Error } from "@/components/common/error/Error";
import styles from "./page.module.css";

export default function CoinErrorPage() {
  const router = useRouter();

  const handleRetry = () => {
    window.location.reload();
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Error
          message="Failed to load details. Please try again shortly."
          onRetry={handleRetry}
          onBack={handleBack}
        />
      </div>
    </main>
  );
}
