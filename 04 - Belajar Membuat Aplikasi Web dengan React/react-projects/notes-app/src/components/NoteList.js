import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDeleteActive, onDeleteArchived, onArchive, onActive, keyword }) {
  if (keyword.length !== 1) {
    notes = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))
  }
  
  
  if (!notes.length) {
    return (
      <p className='notes-list__empty-message'>Tidak ada catatan</p>
    )
  }
  
  // console.log(`Banyak item di array: ${notes.length}
  // \n length dari keyword: ${keyword.length}
  // \n !keyword.length: ${!keyword.length}
  // \n !keyword: ${keyword}
  // `)

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
