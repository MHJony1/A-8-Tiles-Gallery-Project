import React from 'react';

const SkeletonLoader = ({ count = 8 }) => {
  return (
    <section className="py-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: count }).map((_, i) => (
            <div 
              key={i} 
              className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-105"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent z-10" />

              {/* Image Placeholder */}
              <div className="h-[60%] bg-gray-200 animate-pulse" />

              {/* Content Placeholder */}
              <div className="p-6 space-y-5">
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded-full w-2/3 animate-pulse" />
                  <div className="h-3 bg-gray-200 rounded-full w-full animate-pulse" />
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="h-5 bg-gray-200 rounded-md w-1/4 animate-pulse" />
                  <div className="h-10 bg-gray-300 rounded-lg w-1/3 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkeletonLoader;