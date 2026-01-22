"use client";

import { useCryptoPrices } from "@/hooks/useCryptoPrices";
import { buildCryptoList } from "@/utils/crypto";
import { CryptoCard } from "../crypto-card/CryptoCard";
import { CryptoCardListLabels } from "./CryptoCardList.labels";
import styles from "./CryptoCardList.module.css";

interface CryptoCardListProps {
  cryptoIds: string[];
}

export function CryptoCardList({ cryptoIds }: CryptoCardListProps) {
  const { data, isLoading, error } = useCryptoPrices({
    ids: cryptoIds,
    include24hChange: true,
  });

  if (isLoading) {
    return <div className={styles.message}>{CryptoCardListLabels.loading}</div>;
  }

  if (error) {
    return <div className={styles.message}>{CryptoCardListLabels.error}</div>;
  }

  if (!data) {
    return null;
  }

  const cryptos = buildCryptoList(cryptoIds, data);

  return (
    <div className={styles.list}>
      {cryptos.map((crypto) => (
        <CryptoCard
          key={crypto.id}
          name={crypto.name}
          symbol={crypto.symbol}
          logoUrl={crypto.logoUrl}
          price={crypto.price}
          priceChange24h={crypto.priceChange24h}
        />
      ))}
    </div>
  );
}
