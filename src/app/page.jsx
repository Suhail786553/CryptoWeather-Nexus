export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900">
      <h1 className="text-5xl font-bold">CryptoWeather Nexus</h1>
      <p className="mt-4 text-lg">Your one-stop dashboard for real-time Weather & Crypto data.</p>
      <a href="/dashboard" className="mt-6 bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded text-white">Go to Dashboard</a>
    </main>
  );
}
