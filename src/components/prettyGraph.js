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
        moyenne: 40,
        mediane: 50
      },
      post: []
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
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
          <Chart
            width={'100%'}
            height={'300pt'}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Name of the thing', 'échantillonnage', 'moyenne', 'mediane'],
              ["data", Number(this.state.post.echantillonnage), Number(this.state.post.moyenne), Number(this.state.post.mediane)],
            ]}
          />
        </div>
      </div>
    );
  }
}