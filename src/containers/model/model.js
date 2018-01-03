import React from 'react';
import LeftMenu from "../menu/leftmenu";
class modelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         data: 'Initial data...',
         radio: 'yes',
         "name": "Jim",
         "rollNumber": 11,
         "halfYearlyMarks": 60,
         "attendancePercentage": 89,
         "assigmentsCount": 2,
         "internalExamMarks": 89
      }

     this.handleChange = this.handleChange.bind(this);
     this.startTrain = this.startTrain.bind(this);
     this.submitFormData = this.submitFormData.bind(this);
    }

    startTrain() {
      this.setState({data: this.state.radio});
    }


    onRadioChange(value) {
    console.log("radio change");
    this.setState({
      radio: value
    })
   }

   handleChange(key) {
       return function (e) {
         var state = {};
         state[key] = e.target.value;
         this.setState(state);
       }.bind(this);
     }


  submitFormData() {
  var predictData = {
    name: this.state.name,
    rollNumber: this.state.rollNumber,
    halfYearlyMarks: this.state.halfYearlyMarks,
    attendancePercentage: this.state.attendancePercentage,
    assigmentsCount: this.state.assigmentsCount,
    internalExamMarks: this.state.internalExamMarks
  }
  console.log(predictData);


  fetch("", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'access_token': localStorage.getItem('access_token')
      }
    })
    .then((response) => {
      return response.json();
    }).then((responseData) => {
      console.log(responseData);
    })
  }

  render() {

    return (
      <div className="wrapper">
        <LeftMenu />
        <div id="content" className="col-sm-12">
        <div className="col-sm-8">
            <h1>Model Page </h1>

            <div className="">
              <input type="radio" value="yes" name="answer" checked={this.state.radio === 'yes'}
               onChange={(e) => this.onRadioChange('yes')} />
              <input type="radio" value="no" name="answer" checked={this.state.radio === 'no'}
              onChange={(e) => this.onRadioChange('no')} />
              <button onClick = {this.startTrain}>CLICK</button>
              <h4>{this.state.radio}</h4>
              <div>{this.state.data}</div>
            </div>

            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  <th>column</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  Name
                  </td>

                  <td>
                  <input value={this.state.name}
                        onChange={this.handleChange('name')} />
                  </td>
                </tr>
                <tr>
                  <td>Roll number</td>
                  <td>
                  <input
                        value={this.state.rollNumber}
                        onChange={this.handleChange('rollNumber')} />
                  </td>
                </tr>
                <tr>
                  <td>Half yearly marks</td>
                  <td>
                  <input
                        value={this.state.halfYearlyMarks}
                        onChange={this.handleChange('halfYearlyMarks')} />
                  </td>
                </tr>

                <tr>
                  <td>Attendance percentage</td>
                  <td>
                  <input
                        value={this.state.attendancePercentage}
                        onChange={this.handleChange('attendancePercentage')} />
                  </td>
                </tr>

                <tr>
                  <td>Assigments count</td>
                  <td>
                  <input
                        value={this.state.assigmentsCount}
                        onChange={this.handleChange('assigmentsCount')} />
                  </td>
                </tr>

                <tr>
                  <td>Internal exam marks</td>
                  <td>
                  <input
                        value={this.state.internalExamMarks}
                        onChange={this.handleChange('internalExamMarks')} />
                  </td>
                </tr>

                <tr>
                <td colspan="2"><button onClick= {this.submitFormData}>Predict Data</button></td>
                </tr>

              </tbody>
            </table>

         </div>
        </div>
      </div>
    );
  }
};
export default modelPage;
