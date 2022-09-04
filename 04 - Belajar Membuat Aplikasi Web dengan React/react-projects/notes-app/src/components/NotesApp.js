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
      filteredActiveNotes: [],
      filteredArchivedNotes: [],
      keyword: '',
    };

    this.onDeleteActiveHandler = this.onDeleteActiveHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onDeleteArchivedHandler = this.onDeleteArchivedHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchKeywordHandler = this.onSearchKeywordHandler.bind(this);
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
        });
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

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            archived: false,
            createdAt: new Date(),
          }
        ]
      }
    });
  }

  onSearchKeywordHandler({ keyword }) {
    this.setState({ keyword })
    console.log(`${this.state.keyword} - ${this.state.keyword === ''} - ${keyword}`);
  }


  render() {
    return (
        <>
          <Header searchKeyword={this.onSearchKeywordHandler} />

          <div className='note-app__body'>
            <NoteInput addNote={this.onAddNoteHandler} />
            <h2>Catatan Aktif</h2>
            <NoteList notes={this.state.notes} onDeleteActive={this.onDeleteActiveHandler} onArchive={this.onArchiveHandler} keyword={this.state.keyword} />
            <h2>Arsip</h2>
            <NoteList notes={this.state.archivedNotes} onDeleteArchived={this.onDeleteArchivedHandler} onActive={this.onActiveHandler} keyword={this.state.keyword} />
          </div>
        </>
    );
  }
}

export default NotesApp;
