import React from "react";
import Emojipedia from "../emojipedia";
import Entry from "./Entry";

function Add_emoji(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(Add_emoji)}</dl>
    </div>
  );
}

export default App;
