import React, { Component } from 'react';
import Chart from './chart-plot';
import './index.css';

/* All about layout has been placed in a separate file for best legibility. 

   Boxes has been created as a stateful component to control when the chart must be plotted.
*/

class Boxes extends Component
{
	  constructor(props)
	  {
	    super(props);
	    this.plotChart = this.plotChart.bind(this);
	    this.state = {
	          chart: false
	  }
  }
	plotChart()
	{
	  this.setState({
	      chart: true
	  });
	}

  render()
  {

    return (
      <body>
          <div className = 'myName'>
            <p> Andressa's Challenge </p>
          </div>

          <div name='box1' className= 'box1'> This is a test </div>

          <div className = 'box2'>
            {this.state.chart === true ?
                <Chart /> 
              :
              	<footer></footer>
            }
          </div>

          <footer>
             <button className = 'Button' onClick =  {this.plotChart} > GENERATE CHART </button>
          </footer>
      </body>
    );
  }
}


export default Boxes