import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const TilesCard = ({ tile }) => {
  const formattedPrice = parseFloat(tile.price).toFixed(2);

  return (
    <div className="group relative flex flex-col w-full rounded-xl overflow-hidden border border-stone-200 hover:border-amber-400/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
      {/* ── Image ── */}
      <div className="relative h-65 w-full shrink-0 bg-stone-100">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-[1.06]"
        />

        <div className="absolute top-3.5 right-3.5 z-10 px-3 py-1.2 rounded-md bg-black/55 backdrop-blur-md border border-white/10">
          <span className="text-[9px] font-black tracking-widest text-amber-400 uppercase">
            {tile.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col px-5 pt-5 pb-5 bg-[#111111]">
        <h3 className="text-[15px] font-semibold leading-snug tracking-wide text-gray-100 group-hover:text-amber-300 transition-colors duration-300 line-clamp-1">
          {tile.title}
        </h3>

        <div className="mt-3 flex items-end justify-between">
          <div className="flex items-baseline gap-0.75">
            <span className="text-amber-500 text-sm font-bold leading-none mb-0.75">
              $
            </span>
            <span className="text-[26px] font-bold text-white tracking-tight leading-none">
              {formattedPrice}
            </span>
          </div>
          <span className="text-[10px] text-stone-500 tracking-widest uppercase font-medium mb-1">
            / sq ft
          </span>
        </div>

        <div className="mt-4 h-px bg-white/[0.07]" />

        <button className="mt-4 flex items-center justify-between w-full text-[10px] font-bold tracking-[0.25em] uppercase text-stone-500 hover:text-amber-400 transition-colors duration-300 group/btn">
          <Link href={`/all-tiles/${tile.id}`}>View Details</Link>
          <div className="flex items-center">
            <span className="block h-px bg-stone-700 w-6 group-hover/btn:w-10 group-hover/btn:bg-amber-500 transition-all duration-300" />
            <HiOutlineArrowNarrowRight className="text-base ml-0.5 text-stone-600 opacity-0 group-hover/btn:opacity-100 -translate-x-1 group-hover/btn:translate-x-0 transition-all duration-300 group-hover/btn:text-amber-400" />
          </div>
        </button>
      </div>

      {/* Bottom amber line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-linear-to-r from-amber-800 via-amber-400 to-yellow-200 transition-all duration-700 ease-in-out" />
    </div>
  );
};

export default TilesCard;
