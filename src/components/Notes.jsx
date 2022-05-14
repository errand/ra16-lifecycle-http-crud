import {useState, useEffect} from "react";
import Form from "./Form";
import NotesList from "./NotesList";

export default function Notes() {

  const [notes, setNotes] = useState([])
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handleReload()
  }, [])

  const handleReload = () => {
    setLoading(true)
    fetch(process.env.REACT_APP_NOTES_URL)
      .then(response => response.json())
      .then(result => {
        setLoading(false)
        setNotes(result)
      }).catch(err => {
        setLoading(false)
        setHasError(true)
    })
  };

  const handleAdd = note => {
    setLoading(true)
    fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'POST',
      credentials: 'same-origin',
      body: note
      })
      .then(response => response.json())
      .then(result => {
        setLoading(false)
        setNotes(prevState => [...notes, result])
        handleReload()
      }).catch(err => {
        setLoading(false)
        setHasError(true)
    });
  }

  const handleDelete = id => {
    setLoading(true)
    fetch(process.env.REACT_APP_NOTES_URL+`/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin',
      body: id
    })
      .then(response => response.json())
      .then(result => {
        setLoading(false)
        setNotes(result)
        handleReload()
      }).catch(err => {
        setLoading(false)
        setHasError(true)
    });
  }

  return (
    <div className="wrapper" data-testid="test">
      <div className="wrapper--inner">
        <header><h1>Notes</h1><button type="button" onClick={handleReload}><span className="material-symbols-outlined">sync</span></button></header>
        { loading ? <div className="loading"><span className="material-symbols-outlined">hourglass_empty</span></div> : hasError ? <div className="error">Error!</div> : <NotesList list={notes} onDelete={handleDelete} /> }
        <Form onAdd={handleAdd} />
      </div>
    </div>
  );
}
