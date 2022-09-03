import React from 'react';

function DeleteButton({ id, archived, onDeleteActive, onDeleteArchived }) {
    if (archived) {
        return <button className='note-item__delete-button' onClick={() => onDeleteArchived(id)}>Delete</button>
    }
    return <button className='note-item__delete-button' onClick={() => onDeleteActive(id)}>Delete</button>
}

function ArchiveButton({ id, archived, onArchive, onActive }) {
    if (archived) {
        return <button className='note-item__archive-button' onClick={() => onActive(id)}>Pindahkan</button>
    }
    return <button className='note-item__archive-button' onClick={() => onArchive(id)}>Arsipkan</button>
}

function NoteItemAction({ id, archived, onDeleteActive, onDeleteArchived, onArchive, onActive }) {
    return (
        <div className='note-item__action'>
            <DeleteButton id={id} archived={archived} onDeleteActive={onDeleteActive} onDeleteArchived={onDeleteArchived}/>
            <ArchiveButton id={id} archived={archived} onArchive={onArchive} onActive={onActive} />
        </div>
    );
}

export default NoteItemAction;
