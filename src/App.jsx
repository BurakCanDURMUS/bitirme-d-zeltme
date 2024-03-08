import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.bursa.bel.tr/mobil_yeni/json_yeni.php?islem=iletisim"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <h1 className="redHeader">Bursa Büyükşehir Belediyesi İletişim</h1>
      <div className="cart-container">
        {data.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      <footer className="footer">
        <p>2024 © Burak Can DURMUŞ</p>
      </footer>
    </div>
  );
};

export default App;
