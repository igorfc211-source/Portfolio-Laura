import { getSlidesWithStatus } from "@/src/lib/server/slides";
import { PortfolioClient } from "./portfolio-client";

export function Portfolio() {
  const slides = getSlidesWithStatus();

  return <PortfolioClient slides={slides} />;
}
