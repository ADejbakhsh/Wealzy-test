import * as React from "react";
import { Chart } from "react-google-charts";
import Form from "./form";

export default class Prettygraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        name: "",
        echantillonnage: 20,
        moyenne:40,
        mediane: 50
      },
      graphs: []
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => ({
      graphs: [...prevState.graphs, prevState.post],
      post: { echantillonnage: "", moyenne: "", mediane: "" }
    }));
  };

  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          post={this.state.post}
          handleSubmit={this.handleSubmit}
        />
        <div className="post-container">
            {this.state.graphs.map((graph, index) => (
              <div key={index}>
                <Chart
                  width={'100%'}
                  height={'300pt'}
                  chartType="ColumnChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Name of the thing', 'echantillonnage', 'moyenne', 'mediane'],
                    ["data", Number(graph.echantillonnage), Number(graph.moyenne), Number(graph.mediane)],
                  ]}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}