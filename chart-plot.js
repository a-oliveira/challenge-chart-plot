import React, { Component }   from 'react';
import Plot from 'react-plotly.js';

/* Plotly is a library based on React that provides an easy way to plot any chart. 
   The chart component aims to transfer input data with the correct format to Plot.
*/

class Chart extends Component
{
  render()
  {
    return (
        <Plot data = 
        {[
            {
              x: [1, 2, 3, 4],
              y: [10, 15, 13, 17],
              type: 'scatter',
              name: 'linha1',
            },
            {
              x: [1, 2, 3, 4],
              y: [16, 5, 11, 9],
              type: 'scatter',
              name: 'linha2'
            }
        ]}

        layout            = {{autosize: true}}
        useResizeHandler  = {true}
        style             = {{position: 'relative', display: 'inline-block', width: "100%"}}
      />
    );
  }
}

export default Chart


