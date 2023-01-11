import React, { useState } from "react";
import "./styles.css";

const deafTalk = {
  "👋": "Waving Hand",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "🙏": "Folded Hands",
  "🤳": "Selfie",
  "👌": "OK Hand",
  "🤝": "Handshake",
  "💪": "Flexed Biceps",
  "✌": "Victory Hand"
};
var actionsWeKnow = Object.keys(deafTalk);
export default function App() {
  const [meaning, setMeaning] = useState(" ");
  function actionsinputHandler(event) {
    var userInput = event.target.value;
    console.log(event.target.value);
    var meaning = deafTalk[userInput];
    setMeaning(meaning);
  }
  function actionsHandler(emoji) {
    var meaning = deafTalk[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>DEAF TALKING</h1>
      <input onChange={actionsinputHandler} />
      <h2>{meaning}</h2>
      <h1>Actions we know</h1>
      {actionsWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => actionsHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
