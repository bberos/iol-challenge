import React from "react";
import "./App.css";
import Header from "./components/Header";
import FavouritesProvider from "./context/FavouritesProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <FavouritesProvider>
      <div className="App">
        <Header />
        <MyRoutes />
      </div>
    </FavouritesProvider>
  );
}

export default App;
