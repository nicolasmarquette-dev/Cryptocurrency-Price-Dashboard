"use client";

import { useCryptoPrices } from "@/hooks/useCryptoPrices";
import { buildCryptoList } from "@/utils/crypto";
import { CryptoCard } from "../crypto-card/CryptoCard";
import { Error } from "../error/Error";
import { Loading } from "../loading/Loading";
import { CryptoCardListLabels } from "./CryptoCardList.labels";
import styles from "./CryptoCardList.module.css";

interface CryptoCardListProps {
  cryptoIds: string[];
}

export function CryptoCardList({ cryptoIds }: CryptoCardListProps) {
  const { data, isLoading, error, refetch } = useCryptoPrices({
    ids: cryptoIds,
    include24hChange: true,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Error message={CryptoCardListLabels.error} onRetry={() => refetch()} />
    );
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
