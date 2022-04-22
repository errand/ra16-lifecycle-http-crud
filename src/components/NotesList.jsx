import PropTypes from "prop-types";
import Note from "./Note";

export default function NotesList({list, onDelete: handleDelete}) {

  const listItems = list.map(item => <Note key={item.id} item={item} onDelete={handleDelete}/>)

  return(
    <div className="watches">
      {listItems}
    </div>
  )
}
NotesList.propTypes = {
  list: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
