import React from 'react';
import { getInitialData } from '../utils';
import Header from './NotesAppHeader';

import NoteInput from './NoteInput';
import NoteList from './NoteList';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  findNote(id) {
    for (const note of this.state.notes) {
      if (note.id === id) {
        return note;
      }
    }
    return null;
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
    console.log(notes);
  }

  onArchiveHandler(id) {
    for (const note of this.state.notes) {
      if (note.id === id) {
        note.archived = true;

        this.setState((prevState) => {
          return {
            notes: this.state.notes.filter(note => note.archived === false),
            archivedNotes: [
              ...prevState.archivedNotes,
              note,
            ]
          }
        })
      }
    }
    return null;
  }


  render() {
    return (
        <>
          <Header />

          <div className='note-app__body'>
            <NoteInput />
            <h2>Catatan Aktif</h2>
            <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
            <h2>Arsip</h2>
            <NoteList notes={this.state.archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
          </div>
        </>
    );
  }
}

export default NotesApp;
