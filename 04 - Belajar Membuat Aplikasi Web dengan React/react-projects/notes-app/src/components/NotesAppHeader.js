import React from 'react';
import SearchNotesInput from './SearchNotesInput';

function Header() {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <SearchNotesInput />
    </div>
  );
}

export default Header;
