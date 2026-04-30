import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import NewsMarquee from "@/components/Marquee";
import SkeletonLoader from "@/components/SkeletonLoader";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <NewsMarquee />
      <Suspense fallback={<SkeletonLoader />}>
        <FeaturedTiles />
      </Suspense>
    </div>
  );
}
