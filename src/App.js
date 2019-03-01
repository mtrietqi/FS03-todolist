import React, { Component } from 'react';

import './App.css';

//Import components
import Controls from './Components/Controls/Controls'
import TaskList from './Components/TaskList/TaskList'
import Modal from './Components/Modal/Modal'
//Import data
import data from './data'
class App extends Component {
  saveDataOnLS=()=>{
    localStorage.setItem('tasks',JSON.stringify(data))
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Controls 
              saveDataOnLS={this.saveDataOnLS}
              />
              {/* DISPLAY */}
              <TaskList
              data= {data}
              />
            </div>
          </div>
          {/* The Modal */}
          <Modal />
        </div>

      </div>
    );
  }
}

export default App;
