import PropTypes from 'prop-types'

export default function Note({item, onDelete: handleDelete}) {

  return (
    <div className="item">
      <div className="text">{item.text}</div>
      <div className="delete" onClick={() => handleDelete(item.id)}>X</div>
    </div>
  )
}

Note.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
