// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../styles/Note.css"
import PropTypes from 'prop-types';


const Note = ({ note, onDelete }) => {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")
  return (
    <div className="note-container">
    <p className="note-title">{note.title}</p>
    <p className="note-content">{note.content}</p>
    <p className="note-date">{formattedDate}</p>
    <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
    </button>
</div>
  )
}
Note.propTypes = {
    note: PropTypes.any,
    onDelete: PropTypes.any,
}

export default Note