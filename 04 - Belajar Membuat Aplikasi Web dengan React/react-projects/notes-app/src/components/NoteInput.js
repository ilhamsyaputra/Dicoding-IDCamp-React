import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>

        <form>
          <p className='note-input__title__char-limit'>Sisa karakter: 50</p>
          <input className='note-input__title' type='text' placeholder='Ini adalah judul ...' />
          <textarea className='note-input__body' type='text' placeholder='Tuliskan catatanmu di sini ...'></textarea>
          <button type='submit'>Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
