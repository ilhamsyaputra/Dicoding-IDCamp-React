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

    this.onDeleteActiveHandler = this.onDeleteActiveHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onDeleteArchivedHandler = this.onDeleteArchivedHandler.bind(this);
  }

  findNote(id) {
    for (const note of this.state.notes) {
      if (note.id === id) {
        return note;
      }
    }
    return null;
  }

  onDeleteActiveHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onDeleteArchivedHandler(id) {
    const archivedNotes = this.state.archivedNotes.filter(note => note.id !== id);
    this.setState({ archivedNotes })
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

  onActiveHandler(id) {
    for (const note of this.state.archivedNotes) {
      if (note.id === id) {
        note.archived = false;

        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              note,
            ],
            archivedNotes: this.state.archivedNotes.filter(note => note.archived === true),
          }
        });
      }
    }
  }


  render() {
    return (
        <>
          <Header />

          <div className='note-app__body'>
            <NoteInput />
            <h2>Catatan Aktif</h2>
            <NoteList notes={this.state.notes} onDeleteActive={this.onDeleteActiveHandler} onArchive={this.onArchiveHandler} />
            <h2>Arsip</h2>
            <NoteList notes={this.state.archivedNotes} onDeleteArchived={this.onDeleteArchivedHandler} onActive={this.onActiveHandler} />
          </div>
        </>
    );
  }
}

export default NotesApp;
