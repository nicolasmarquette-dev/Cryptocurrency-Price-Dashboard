import { ErrorLabels } from "./Error.labels";
import styles from "./Error.module.css";

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

export function Error({ message = ErrorLabels.defaultMessage, onRetry }: ErrorProps) {
  return (
    <div className={styles.container}>
      <span>{message}</span>
      {onRetry && (
        <button className={styles.retryButton} onClick={onRetry}>
          {ErrorLabels.retry}
        </button>
      )}
    </div>
  );
}
