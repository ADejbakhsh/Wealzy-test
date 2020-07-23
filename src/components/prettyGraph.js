import * as React from "react";
import { Chart } from "react-google-charts";
import Form from "./form";
export default class Prettygraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      echantillonnage: 20,
      moyenne:40,
      mediane: 50
    };
  }
  handleChange = e => {
    console.log(e);
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };
  addInput = e => {
    console.log(e);
    this.setState({
      ...this.state,
      [e] : 0
    });
  };
  deleteInput = inputName => {
    delete this.state[inputName.target.name]
    this.setState({
      ...this.state
    });
  };
  render() {
    let dataA = ['Name of the thing'];
    let dataB = ["data"];
    for (const [key, value] of Object.entries(this.state)) {
      dataA.push(key);
      dataB.push(Number(value));
    }
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          addInput={this.addInput}
          deleteInput={this.deleteInput}
          fields={this.state}
        />
        <div className="post-container">
          <Chart
            width={'100%'}
            height={'300pt'}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[ dataA, dataB ]}
          />
        </div>
      </div>
    );
  }
}