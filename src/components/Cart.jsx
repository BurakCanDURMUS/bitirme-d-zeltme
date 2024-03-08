import React from "react";
import "./Cart.css";
import mapUrls from "./mapUrls";

const Cart = ({ data }) => {
  const matchedUrl = mapUrls.find((item) => item.id === data.id)?.url; //mapUrls.js içerisinde bulunan id api den gelen id ile aynı ise haritaları buna göre eşleştir

  const openInGoogleMaps = () => {
    const { koordinat } = data;
    const [latitude, longitude] = koordinat.split(",").map(Number);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <div className="cart">
      <div className="cart-info">
        <h2>{data.adi}</h2>
        <p>{`Adres: ${data.adres}`}</p>
        <p>{`Telefon: ${data.tel}`}</p>
        <p>{`Fax: ${data.fax}`}</p>
        <p>{`E-posta: ${data.mail}`}</p>
        <p>{`Web: ${data.web}`}</p>
        <button onClick={openInGoogleMaps}>Yol Tarifi Al</button>
      </div>
      {matchedUrl && (
        <div className="cart-map">
          <iframe
            src={matchedUrl}
            width="300"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Cart;
