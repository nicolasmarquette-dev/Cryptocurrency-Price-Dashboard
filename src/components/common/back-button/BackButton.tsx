"use client";

import { useRouter } from "next/navigation";
import { Button } from "../button/Button";
import { BackButtonLabels } from "./BackButton.labels";

export function BackButton() {
  const router = useRouter();

  return <Button onClick={() => router.back()}>{BackButtonLabels.back}</Button>;
}
