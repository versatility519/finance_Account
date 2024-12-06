// import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/navigation/Navigation";

import Routes from './routes'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      ssssssss
      <div className="flex m-4  border rounded-xl">

        {/* <aside className="w-64 bg-white border-r min-h-[calc(100vh-73px)]">
          <Navigation />
        </aside> */}
        <main className="flex-1 p-6">
          <Routes />
        </main>
      </div>

    </div>
  );
}

export default App;
