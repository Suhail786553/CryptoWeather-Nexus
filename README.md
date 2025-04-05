#  CryptoWeather Nexus

CryptoWeather Nexus is a responsive multi-page dashboard that combines real-time cryptocurrency data, weather information, and news headlines. The app features live WebSocket notifications and supports favoriting cities or cryptocurrencies for quick access.

Live App: (https://crypto-weather-nexus123.netlify.app/)

---

## Tech Stack

- **Next.js 13+** (App Router)
- **React** (Functional Components with Hooks)
- **Redux Toolkit** (State Management)
- **Tailwind CSS** (Responsive UI)
- **WebSocket** (Real-time data)
- **REST APIs** (Weather, Crypto, News)

---

##  Features

###  Weather

- Weather info (temperature, humidity, conditions) for 3 predefined cities:  
  **New York**, **London**, **Tokyo**
- City detail pages with historical data (chart/table)
- Mock weather alerts displayed via real-time toast

###  Cryptocurrency

- Live price, 24h change, market cap for:  
  **Bitcoin**, **Ethereum**, **Dogecoin**
- Detail page for each coin with extended metrics
- WebSocket updates for BTC & ETH with notifications
- Favorite a coin for easy access

###  News

- Top 5 crypto-related headlines
- Auto-refreshes every 60 seconds

---

##  API Integrations

| Feature       | API Used                        |
|--------------|----------------------------------|
| Weather       | OpenWeatherMap API              |
| Crypto Data   | CoinCap REST + WebSocket API    |
| News          | NewsData.io API                 |

> *All API keys are handled securely via environment variables.*

---

##  Real-Time Notifications

- **BTC/ETH Price Alerts**: Using CoinCap WebSocket, significant price changes are shown using toast notifications.
- **Weather Alerts**: Simulated mock weather alerts every 20 seconds.
- All alerts carry a `type` field (`price_alert` / `weather_alert`) in payloads.

---

##  Pages & Routing

- `/`: Main dashboard with all 3 sections (Weather, Crypto, News)
- `/weather/[city]`: Detailed weather info
- `/crypto/[id]`: Extended crypto info
- Deep linking supported with prefetching

---

##  Design Decisions

- Used Redux Toolkit for clean state logic and async fetching
- Real-time logic separated in a dedicated component (`RealTimeHandler`)
- Lightweight, responsive UI with Tailwind for speed and maintainability
- Notifications with `react-hot-toast` for simplicity and feedback

---

##  Favorites Feature

- Mark any city or crypto as favorite
- Stored in global Redux state
- Visually highlighted in UI

---

##  Optional Testing (If Implemented)

- Redux slice tests
- WebSocket event handling tests

---

##  Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/Suhail786553/CryptoWeather-Nexus.git
cd crypto-weather-nexus
