import { getCoinMarket } from "@/lib/coingecko.api";
import { formatPrice } from "@/utils/format";
import { CoinDetailLabels } from "./CoinDetail.labels";
import styles from "./CoinDetail.module.css";

interface CoinDetailProps {
  coinId: string;
}

export async function CoinDetail({ coinId }: CoinDetailProps) {
  const coin = await getCoinMarket(coinId);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src={coin.image}
          alt={`${coin.name} logo`}
          className={styles.logo}
        />
        <div className={styles.titleGroup}>
          <span className={styles.name}>{coin.name}</span>
          <span className={styles.symbol}>{coin.symbol}</span>
        </div>
      </div>

      <span className={styles.price}>{formatPrice(coin.current_price)}</span>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>{CoinDetailLabels.high24h}</span>
          <span className={styles.statHigh}>{formatPrice(coin.high_24h)}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>{CoinDetailLabels.low24h}</span>
          <span className={styles.statLow}>{formatPrice(coin.low_24h)}</span>
        </div>
      </div>
    </div>
  );
}
