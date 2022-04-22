import {useState} from "react";
import Form from "./Form";
import NotesList from "./NotesList";

export default function Notes() {

  const [notes, setNotes] = useState([])

  const handleAdd = note => {
    console.log(note)
    fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'POST',
      credentials: 'same-origin',
      body: note
      })
      .then(response => response.json())
      .then(result => {
        console.log(result)
      });


  }

  const handleDelete = id => {
    setNotes(prevState => prevState.filter(o => o.id !== id));
  }

  return (
    <div className="wrapper" data-testid="test">
      <div className="wrapper--inner">
        <Form onAdd={handleAdd} />
        <NotesList list={notes} onDelete={handleDelete} />
      </div>
    </div>
  );
}
