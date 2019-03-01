import React, { Component } from 'react';

class TaskItem extends Component {
  getLabelColore = (label) => {
    switch (label) {
      case "Frontend":
        return "#389E0D"
      case "Backend":
        return "#722ED1"
      case "API":
        return "#13C2C2"
      case "Issue":
        return "#CF1322"
    }
  }
  getPriorityClass = (number) => {
    switch (number) {
      case 1:
        return "text-danger"
      case 2:
        return "text-success"
      case 3:
        return "text-info"
      default:
        return ""
    }
  }
  //render priority
  priority = keyInput => {
    if (keyInput === 1) {
      return "Thấp"
    } else if (keyInput === 2) {
      return "Vừa"
    } else {
      return "Cao"
    }
  }
  getProgressIcon=(number)=>{
    switch(number){
      case 1:
      return "fa fa-hourglass-start"
      case 2:
      return "fa fa-pause-circle-o"
      case 3:
      return "fa fa-check-square-o"
      case 4:
      return "fa fa-trash-o"

    }
  }

  render() {
    const { index, item } = this.props;
    // render label
    const labelElm = item.labelArr.map((label, index) => {
      return <i
        className="fa fa-circle"
        style={{ color: this.getLabelColore(label) }}
      >

      </i>
    })
    
    //render image
    const memberImage = item.memberIDArr.map((memberID, index) => {
      return <img src={`./img/${memberID}.jpg`}
        className="user"
        alt=""
        key={index}
      />
    })
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{item.name}</td>
        <td className="text-center">
          {labelElm}
        </td>
        <td className={`${this.getPriorityClass(item.priority)} font-weight-bold text-center`}>
          {this.priority(item.priority)}
        </td>
        <td className="text-center">
          {memberImage}
        </td>
        <td className="text-center d-flex">
          <button type="button" className="btn btn-outline-primary">Sửa</button>
          <div className="form-group mx-1 my-0">
            <select className="form-control" name="" id="">
              <option value={-1}>Chon Tinh Trang</option>
              <option value={1}>Bat Dau</option>
              <option value={2}>Tam Ngung</option>
              <option value={3}>Hoan Thanh</option>
              <option value={4}>Huy Bo</option>
            </select>
          </div>
        </td>
        <td className="text-center">
          <i className={`fa ${this.getProgressIcon(item.status)}`} />
        </td>
      </tr>
    );
  }
}

export default TaskItem;