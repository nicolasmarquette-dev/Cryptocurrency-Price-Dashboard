"use client";

import { Error } from "@/components/common/error/Error";

export default function ErrorPage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <Error message="Failed to load prices" onRetry={handleRetry} />
    </main>
  );
}
