import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      characterLeft: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
        characterLeft: 50 - event.target.value.length,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>

        <form onSubmit={this.onSubmitEventHandler}>
          <p className='note-input__title__char-limit'>Sisa karakter: {this.state.characterLeft}</p>
          <input className='note-input__title' type='text' value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder='Ini adalah judul ...' maxLength='50' />
          <textarea className='note-input__body' type='text' value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder='Tuliskan catatanmu di sini ...'></textarea>
          <button type='submit'>Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
