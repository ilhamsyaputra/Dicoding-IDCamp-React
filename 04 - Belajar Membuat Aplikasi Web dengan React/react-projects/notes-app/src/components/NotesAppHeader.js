import React from 'react';


class Header extends React.Component {
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
    this.props.searchKeyword(this.state);
  }

  render() {
    return (
      <div className='note-app__header'>
        <h1>Notes</h1>
        <div className='note-search'>
          <input type='text' value={this.state.keyword} placeholder='Cari catatan...' onChange={this.onKeywordChangeEventHandler} />
        </div>
      </div>
    );
  }
}

export default Header;
