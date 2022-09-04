import React from 'react';

class SearchNotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };

    this.onKeywordChangeEventHandler = this.onKeywordChangeEventHandler.bind(this);
  }

  onKeywordChangeEventHandler(event) {
    this.setState(() => {
      return {
        keyword: event.target.value,
      }
    });

    console.log(this.props)
  }

  render() {
    return (
      <div className='note-search'>
        <input type='text' placeholder='Cari catatan...' onChange={this.onKeywordChangeEventHandler} />
      </div>
    );
  }
}

export default SearchNotesInput;
