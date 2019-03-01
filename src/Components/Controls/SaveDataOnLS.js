import React, { Component } from 'react';

class SaveDataOnLS extends Component {
    render() {
        return (
            <button type="button" className="btn my-3 btn-warning" onClick={this.props.saveDataOnLS}>
                <i className="fa fa-pencil-square-o" />
                Luu len Local Storage
                </button>
        );
    }
}

export default SaveDataOnLS;