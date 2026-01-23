import { Suspense } from "react";
import { CoinDetail } from "@/components/coin-detail/CoinDetail";
import { Loading } from "@/components/loading/Loading";

interface CoinPageProps {
  params: Promise<{ id: string }>;
}

export default async function CoinPage({ params }: CoinPageProps) {
  const { id } = await params;

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <Suspense fallback={<Loading />}>
        <CoinDetail coinId={id} />
      </Suspense>
    </main>
  );
}
