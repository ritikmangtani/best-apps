import { useState } from "react";
import "./styles.css";

var appList = {
  Audio: [
    { name: "Avalon Voices", Rating: "4.5/5" },
    { name: "Anchor.fm", Rating: "4/5" }
  ],

  FoodDelivery: [
    { name: "Swiggy", Rating: "4/5" },
    { name: "Zomato", Rating: "3.5/5" }
  ],

  Music: [
    { name: "JioSaavn", Rating: "4.5/5" },
    { name: "Spotify", Rating: "4/5" }
  ]
};

var apps = Object.keys(appList);

export default function App() {
  var [selectedType, setType] = useState("Audio");
  function typeClickHandler(type) {
    setType(type);
  }

  return (
    <div className="App">
      <h1>Best apps to checkout :</h1>
      <h3>Have a look at me faviourite apps</h3>

      <div>
        {Object.keys(appList).map((type) => (
          <button
            key={type}
            onClick={() => typeClickHandler(type)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {appList[selectedType].map((app) => (
            <li
              key={app.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {app.name} </div>
              <div style={{ fontSize: "smaller" }}> {app.Rating} </div>
            </li>
          ))}
        </ul>
      </div>
      {""}
      {""}
      {""}
      <p>Checkout my other Projects</p>
      <a
        style={{
          textDecoration: "none",
          padding: "0.3rem",
          border: "2px solid black",
          borderRadius: "0.3rem",
          color: "white",
          backgroundColor: "Black"
        }}
        href="https://ritikmangtani-portfolio.netlify.app/projects.html"
      >
        Browse Projects
      </a>
    </div>
  );
}
