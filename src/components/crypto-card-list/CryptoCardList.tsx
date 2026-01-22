import { Crypto } from "@/types/crypto";
import { CryptoCard } from "../crypto-card/CryptoCard";
import styles from "./CryptoCardList.module.css";

interface CryptoCardListProps {
  cryptos: Crypto[];
}

export function CryptoCardList({ cryptos }: CryptoCardListProps) {
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
