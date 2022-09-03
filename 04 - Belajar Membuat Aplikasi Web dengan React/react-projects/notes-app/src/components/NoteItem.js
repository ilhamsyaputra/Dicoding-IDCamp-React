import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({ id, title, body, archived, createdAt, onDeleteActive, onDeleteArchived, onArchive, onActive }) {
  return (
    <div className='note-item'>
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <NoteItemAction id={id} onDeleteActive={onDeleteActive} onDeleteArchived={onDeleteArchived} onArchive={onArchive} archived={archived} onActive={onActive} />
    </div>
  );
}

export default NoteItem;
