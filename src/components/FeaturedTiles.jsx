// http://localhost:3000/products.json
import TilesCard from './TilesCard';
import Link from 'next/link';

const FeaturedTiles = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch('https://tile-gallery-server2.onrender.com/products', {
    cache: 'no-store',
  });
  const tiles = await res.json();

  return (
    <section className="relative bg-[#faf9f6] py-14 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-white via-amber-50/30 to-white pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#b45309 0.6px, transparent 0.6px)',
          backgroundSize: '18px 18px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* ── Heading Section ── */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-amber-600/40" />
            <span className="text-amber-600 text-[10px] font-bold tracking-[0.55em] uppercase">
              Curated Selection
            </span>
            <span className="w-10 h-px bg-amber-600/40" />
          </div>

          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 italic leading-none">
            Signature{' '}
            <span className="font-extrabold not-italic text-transparent bg-clip-text bg-linear-to-br from-amber-500 via-amber-700 to-amber-900">
              Collection
            </span>
          </h2>

          <div className="mt-5 flex items-center gap-2">
            <span className="w-16 h-px bg-amber-200" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-16 h-px bg-amber-200" />
          </div>

          <p className="mt-5 text-gray-400 max-w-lg text-sm leading-relaxed tracking-wide">
            Explore our world-class textures designed for modern architectural
            spaces, where elegance meets durability.
          </p>
        </div>

        {/* ── Card Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tiles.slice(0, 8).map((tile) => (
            <TilesCard key={tile.id} tile={tile} />
          ))}
        </div>

        {/* ── CTA Button ── */}
        <div className="mt-20 flex justify-center">
          <Link href="/all-tiles">
            <button className="group relative px-14 py-4 overflow-hidden bg-transparent border border-amber-600/30 text-amber-700 text-[11px] font-bold tracking-[0.35em] uppercase rounded-sm transition-all duration-500 hover:border-amber-600 hover:text-white cursor-pointer">
              <span className="absolute inset-0 bg-linear-to-r from-amber-700 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10">View All Products</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTiles;






