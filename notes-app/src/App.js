import React, { Component } from 'react';
import './App.css';

import { display_note } from "./components/note";
// import Notes from "./components/note";

class App extends Component {
  state = {
    note_titles: ["Note #1", "Note #2", "Note #3", "Note #4", "Note #5", "Note #6", "Note #7", "Note #8", "Note #9", "Note #10", "Note #11", "Note #12", "Note #13", "Note #14", "Note #15"]
  }

  render() {
    return (
      <div className="App">
        {/* <Notes /> */}
        {this.state.note_titles.forEach(title => display_note(title) )}
      </div>
    );
  }
}

export default App;
