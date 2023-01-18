import "../styles.css";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(entryTerm) {
  return (
    <Entry
      key={entryTerm.id}
      emoji={entryTerm.emoji}
      name={entryTerm.name}
      meaning={entryTerm.meaning}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1>
        <span> emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}

        {/* <Entry
          emoji={emojipedia[0].emoji}
          name={emojipedia[0].name}
          meaning={emojipedia[0].meaning}

          // emoji="💪"
          // name="manis"
          // meaning="lorem lkoergdhagfkah ahjdgfhgahdgfahgfd jahdgfa"
        />
        <Entry
          emoji={emojipedia[1].emoji}
          name={emojipedia[1].name}
          meaning={emojipedia[1].meaning}
        />

        <Entry
          emoji={emojipedia[2].emoji}
          name={emojipedia[2].name}
          meaning={emojipedia[2].meaning}
        /> */}
      </dl>
    </div>
  );
}
