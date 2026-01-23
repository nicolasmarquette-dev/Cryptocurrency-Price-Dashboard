import { getSimplePrice } from "@/lib/coingecko.api";
import { buildCryptoList } from "@/utils/crypto";
import { CryptoCard } from "../crypto-card/CryptoCard";
import styles from "./CryptoCardList.module.css";

interface CryptoCardListProps {
  cryptoIds: string[];
}

export async function CryptoCardList({ cryptoIds }: CryptoCardListProps) {
  const data = await getSimplePrice({
    ids: cryptoIds,
    include24hChange: true,
  });

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
