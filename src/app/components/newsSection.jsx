'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/slices/newsSlice';

export default function NewsSection() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="bg-purple-800 p-4 rounded-xl shadow-md h-full overflow-auto">
      <h3 className="text-2xl font-semibold mb-4">Crypto News</h3>
      {loading && <p>Loading news...</p>}
      {error && <p>Error loading news: {error}</p>}
      {!loading && !error && data.length > 0 && (
        <ul className="space-y-3">
          {data.map((article, index) => (
            <li key={index} className="bg-purple-700 p-3 rounded hover:bg-purple-600 transition">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium underline"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-300 mt-1">
                Source: {article.source} | {new Date(article.pubDate).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
