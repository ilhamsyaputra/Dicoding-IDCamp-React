import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDeleteActive, onDeleteArchived, onArchive, onActive }) {
  if (!notes.length) {
    return (
      <p className='notes-list__empty-message'>Tidak ada catatan</p>
    )
  }
  
  return (
    <div className='notes-list'>
      {
        notes.map((note) => (
          <NoteItem
          key={note.id}
          id={note.id}
          archived={note.archive}
          onDeleteActive={onDeleteActive}
          onDeleteArchived={onDeleteArchived}
          onArchive={onArchive}
          onActive={onActive}
          {...note}
          />
        ))
      }
    </div>
  );
}

export default NoteList;
