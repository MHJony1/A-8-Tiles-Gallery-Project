import { Suspense } from 'react';
import SearchTiles from '@/components/SearchTiles';
import SkeletonLoader from '@/components/SkeletonLoader';
import CollectionCount from '@/components/CollectionCount';


export const metadata = {
  title: 'Tilecraft Gallery | All Tiles',
  description: 'Premium tile designs for modern architectural spaces.',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
  },
};

const TilesContent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    'https://tile-gallery-server2.onrender.com/products',
    { cache: "no-store" },
  );
  const tiles = await res.json();

  return (
    <>
      {/* Search and Grid Section */}
      <div className="bg-white rounded-3xl p-2 md:p-6">
        <SearchTiles tiles={tiles} />
      </div>
    </>
  );
};

const AllTilesPage = () => {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <header className="relative pt-16 pb-12 bg-white border-b border-stone-100">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            {/* Left Side */}
            <div className="relative">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-10 h-0.5 bg-amber-500" />
                <span className="text-[11px] tracking-[0.4em] uppercase text-amber-600 font-bold">
                  Premium Selection
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-light text-stone-900 leading-tight tracking-tight">
                Signature <br />
                <span className="font-serif italic text-amber-500/90">
                  Catalogue
                </span>
              </h1>
            </div>

            {/* Right Side */}
            <div className="max-w-sm md:text-right border-t md:border-t-0 md:border-l border-stone-200 pt-6 md:pt-0 md:pl-10">
              <p className="text-stone-500 text-sm font-light leading-relaxed mb-4">
                Explore a curated library of architectural masterpiece tiles
                designed for luxury interiors and sustainable urban living.
              </p>
              <div className="flex items-center md:justify-end gap-3">
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
                  Total Collection
                </span>
                <span>
                  <CollectionCount />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Grid Section with Suspense */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <Suspense fallback={<SkeletonLoader count={12} />}>
          <TilesContent />
        </Suspense>
      </section>

      {/* Aesthetic Bottom Detail */}
      <div className="flex justify-center pb-16">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-stone-200" />
          <span className="text-[9px] tracking-[0.6em] uppercase text-stone-300 font-light">
            End of Collection
          </span>
          <div className="w-12 h-px bg-stone-200" />
        </div>
      </div>
    </main>
  );
};

export default AllTilesPage;
