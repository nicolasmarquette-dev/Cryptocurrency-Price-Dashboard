import { Suspense } from "react";
import { CryptoCardList } from "@/components/crypto-card-list/CryptoCardList";
import { Loading } from "@/components/common/loading/Loading";
import { CRYPTO_METADATA } from "@/constants/crypto";

export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <Suspense fallback={<Loading />}>
        <CryptoCardList cryptoIds={Object.keys(CRYPTO_METADATA)} />
      </Suspense>
    </main>
  );
}
