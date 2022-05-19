import { useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/04/2021"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "20/10/2022"
    }
  ]);

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <NotesList
          notes={notes}
          handleDeleteNote={deleteNote}
          handleAddNote={addNote}
        />
      </div>
    </div>
  );
}

export default App;
