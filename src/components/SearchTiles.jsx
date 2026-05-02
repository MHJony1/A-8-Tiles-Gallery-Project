'use client';
import React, { useState } from 'react';
import { SearchField, Label } from '@heroui/react';
import TilesCard from './TilesCard';

const SearchTiles = ({ tiles }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTiles = tiles?.filter((tile) => {
    const searchStr = searchTerm.toLowerCase();
    return (
      tile.title?.toLowerCase().includes(searchStr) ||
      tile.category?.toLowerCase().includes(searchStr)
    );
  });

  return (
    <div className="pb-10">
      {/* ---  Search Section --- */}
      <div className="flex flex-col items-center mb-20">
        <div className="w-full max-w-2xl">
          <SearchField
            value={searchTerm}
            onValueChange={(value) => setSearchTerm(value)}
          >
            <Label className="block text-center text-[11px] tracking-[0.4em] uppercase text-stone-400 font-bold mb-6">
              Refine Your Search
            </Label>

            <SearchField.Group
              className="
                            flex items-center gap-4 px-6 py-4
                            bg-white border-b-2 border-t-0 border-x-0 border-stone-200 
                            rounded-none shadow-none
                            hover:border-amber-500/50 focus-within:border-amber-500
                            transition-all duration-700 ease-in-out
                        "
            >
              <SearchField.SearchIcon className="text-amber-600 w-5 h-5 shrink-0" />

              <SearchField.Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, style or texture..."
                className="
                                    bg-transparent flex-1 text-stone-800
                                    placeholder:text-stone-300 placeholder:font-light placeholder:italic
                                    text-lg tracking-tight
                                    focus:outline-none
                                "
              />

              {searchTerm && (
                <SearchField.ClearButton
                  onClick={() => setSearchTerm('')}
                  className="text-stone-300 hover:text-amber-600 transition-colors"
                />
              )}
            </SearchField.Group>
          </SearchField>
        </div>
      </div>

      {/* --- Grid Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
        {filteredTiles?.length > 0 ? (
          filteredTiles.map((tile) => (
            <div
              key={tile.id}
              className="group transition-transform duration-500 hover:-translate-y-2"
            >
              <TilesCard tile={tile} />
            </div>
          ))
        ) : (
          <div className="col-span-full py-32 text-center bg-[#fafafa] border border-dashed border-stone-200 rounded-2xl">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm mb-4">
              <SearchField.SearchIcon className="text-amber-200 w-5 h-5" />
            </div>
            <h3 className="text-stone-800 font-serif italic text-xl mb-2">
              No matching textures found
            </h3>
            <p className="text-stone-400 text-sm font-light uppercase tracking-widest">
              Try searching for marble, ceramic, or modern styles
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTiles;











