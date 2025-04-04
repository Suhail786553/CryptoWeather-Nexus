import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;
const BASE_URL = 'https://newsdata.io/api/1/news';

export const getNewsData = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        q: 'cryptocurrency',
        language: 'en',
        category: 'business',
      },
    });

    // Return only top 5 articles
    return response.data.results.slice(0, 5).map(article => ({
      title: article.title,
      link: article.link,
      pubDate: article.pubDate,
      source: article.source_id,
    }));
  } catch (error) {
    throw new Error("Failed to fetch news");
  }
};
