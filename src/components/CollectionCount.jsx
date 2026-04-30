'use client';
import { useEffect, useState } from 'react';

const CollectionCount = () => {
    const [count, setCount] = useState(null);

    useEffect(() => {
        fetch('https://tile-gallery-server2.onrender.com/products')
            .then(res => res.json())
            .then(data => setCount(data.length))
            .catch(() => setCount(0));
    }, []);

    return (
        <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-100 min-w-15 inline-flex justify-center">
            {count !== null ? `${count} Units` : (
                <span className="w-8 h-3 bg-amber-200/50 animate-pulse rounded-full" />
            )}
        </span>
    );
};

export default CollectionCount;

