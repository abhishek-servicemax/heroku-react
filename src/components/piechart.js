import React, { Component } from 'react';


import d3 from 'd3';
import nv from 'nvd3';

const renderVisualizationChart = function(props) {
//var data = props.data;
console.log(props.data);

if (props.data.length) {
  var data = props.data[0];
  var list = "";
  console.log(data);
  nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.count })
      .showLabels(true);

    d3.select('#' + props.graphID + ' svg')
        .datum(data.values)
      .transition().duration(1200)
        .call(chart);
    chart.pie.dispatch.on("elementClick", function(e) {
      props.updateTableData(e.data.label);

        //  console.log(e.data.label);
    });

  return chart;
});
}
}

export const PieChartCom = (props) => {
  return (
    <div>
     {renderVisualizationChart(props)}
    </div>
  )
}

export default PieChartCom;
