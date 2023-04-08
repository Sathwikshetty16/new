import React from "react";
import Entry from "./entry";
import emojipedia from "./emoji";


function createEntry(props) {
  return (
    <Entry
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      description={props.meaning}
    />
  );
}

function Appl() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default Appl;
