import './styles/globals.css';
import { ReduxProvider } from './redux/provider';

export const metadata = {
  title: 'CryptoWeather Nexus',
  description: 'Dashboard for Weather, Crypto, and News',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
