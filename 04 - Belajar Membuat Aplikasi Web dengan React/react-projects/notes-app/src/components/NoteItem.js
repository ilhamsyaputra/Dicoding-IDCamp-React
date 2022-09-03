import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({ id, title, body, archived, createdAt, onDelete, onArchive }) {
  return (
    <div className='note-item'>
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
    </div>
  );
}

export default NoteItem;
