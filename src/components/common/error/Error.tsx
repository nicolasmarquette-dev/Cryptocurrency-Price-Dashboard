import { Button } from "../button/Button";
import { ErrorLabels } from "./Error.labels";
import styles from "./Error.module.css";

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
  onBack?: () => void;
}

export function Error({
  message = ErrorLabels.defaultMessage,
  onRetry,
  onBack,
}: ErrorProps) {
  return (
    <div className={styles.container}>
      <span>{message}</span>
      <div className={styles.actions}>
        {onBack && <Button onClick={onBack}>{ErrorLabels.back}</Button>}
        {onRetry && <Button onClick={onRetry}>{ErrorLabels.retry}</Button>}
      </div>
    </div>
  );
}
