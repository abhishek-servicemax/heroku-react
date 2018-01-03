import React from 'react';
import LeftMenu from "../menu/leftmenu";
import PaiChartCom from "../../components/piechart";
import * as d3 from "d3";
import nv from 'nvd3';
class VisualizationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		 PaiData :   [
       {
         "values": [{"label":"Pass","count":11},{"label":"Fail","count":11}],
         "disable":false
       }
     ],
    studentResultData: [
      {
        "name": "Jim",
        "rollNumber": 11,
        "halfYearlyMarks": 60,
        "attendancePercentage": 89,
        "assigmentsCount": 2,
        "internalExamMarks": 89,
        "result": "Pass"
      },
      {
        "name": "Tim",
        "rollNumber": 12,
        "halfYearlyMarks": 60,
        "attendancePercentage": 89,
        "assigmentsCount": 5,
        "internalExamMarks": 45,
        "result": "Fail"
      }
    ]

	 };
   this.updateTableData = this.updateTableData.bind(this);
  }

  updateTableData(data) {
    console.log(data);
  }

  renderList() {
      if (this.state.studentResultData.length) {
        return this.state.studentResultData.map((lists) => {
          return (
            <tr>
              <td>{lists.name}</td>
              <td>{lists.rollNumber}</td>
              <td>{lists.halfYearlyMarks}</td>
              <td>{lists.attendancePercentage}</td>
              <td>{lists.assigmentsCount}</td>
              <td>{lists.internalExamMarks}</td>
              <td>{lists.result}</td>
            </tr>
         )
        });
      }
}

  render() {
    return (
      <div className="wrapper">
      <LeftMenu />
      <div id="content">
      <h1>Visualization Page </h1>
      <div id="BaseLineChart" className="chart-container">
					<svg></svg>
	   	</div>
			<PaiChartCom data={this.state.PaiData} updateTableData={this.updateTableData} graphID="BaseLineChart" />
      <div>
      <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Roll number</th>
        <th>Half yearly marks</th>
        <th>Attendance percentage</th>
        <th>Assigments count</th>
        <th>Internal exam marks</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
    {this.renderList()}
    </tbody>
  </table>
  </div>

      </div>
      </div>

    );
  }
};
export default VisualizationPage;
