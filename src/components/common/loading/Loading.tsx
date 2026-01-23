import { LoadingLabels } from "./Loading.labels";
import styles from "./Loading.module.css";

interface LoadingProps {
  message?: string;
}

export function Loading({ message = LoadingLabels.defaultMessage }: LoadingProps) {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <span>{message}</span>
    </div>
  );
}
