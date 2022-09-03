import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className='notes-list'>
      {
        notes.map((note) => (
          <NoteItem
          key={note.id}
          id={note.id}
          archived={note.archive}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note}
          />
        ))
      }
    </div>
  );
}

export default NoteList;
