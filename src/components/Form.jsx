import {useState} from "react";
import PropTypes from "prop-types";

import Note from "../models/Note";

export default function Form({onAdd}) {

  const [form, setForm] = useState({
    text: ''
  });

  const handleText = evt => {
    setForm(prevForm => ({...prevForm, text: evt.target.value}))
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const note = new Note(form.text)
    onAdd(note)
    setForm({
      text: ''
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="text">Название</label>
          <textarea id="text" name="text" value={form.text} onChange={handleText} ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Добавить</button>
        </div>
      </div>
    </form>
  )
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired,
};