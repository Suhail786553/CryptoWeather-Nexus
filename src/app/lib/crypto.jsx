import axios from "axios";

export const getCryptoData=async(coins=[])=>{
    const ids = coins.join('%2C'); // 'bitcoin%2Cethereum%2Cdogecoin'
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=3&page=1&sparkline=false`;
  const response = await axios.get(url);
  return response.data;
};