import { Crypto } from "@/types/crypto";
import { formatPercentage, formatPrice } from "@/utils/format";
import styles from "./CryptoCard.module.css";

type CryptoCardProps = Omit<Crypto, "id">;

export function CryptoCard({
  name,
  symbol,
  logoUrl,
  price,
  priceChange24h,
}: CryptoCardProps) {
  const isPositive = priceChange24h !== undefined && priceChange24h >= 0;

  return (
    <div className={styles.card}>
      <img src={logoUrl} alt={`${name} logo`} className={styles.logo} />
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.name}>{name}</span>
          <span className={styles.symbol}>{symbol}</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(price)}</span>
          {priceChange24h !== undefined && (
            <span
              className={`${styles.percentageChange} ${isPositive ? styles.positive : styles.negative}`}
            >
              {formatPercentage(priceChange24h)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
