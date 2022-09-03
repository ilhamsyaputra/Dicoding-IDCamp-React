import React from 'react';

function DeleteButton({ id, onDelete }) {
    return <button className='note-item__delete-button' onClick={() => onDelete(id)}>Delete</button>
}

function ArchiveButton({ id, archived, onArchive }) {
    if (archived) {
        return <button className='note-item__archive-button' onClick={() => onArchive(id)}>Pindahkan</button>
    }
    return <button className='note-item__archive-button' onClick={() => onArchive(id)}>Arsipkan</button>
}

function NoteItemAction({ id, archived, onDelete, onArchive }) {
    return (
        <div className='note-item__action'>
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
        </div>
    );
}

export default NoteItemAction;
