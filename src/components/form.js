import React from "react";
function input(name, value, handleChange, deleteInput)
{
  return (
    <div>
      <b>
        {name}
      </b>
      <input
        name={name}
        onChange={handleChange}
        type="number"
        value={value}
        placeholder={name}
      />
      <input
        name={name}
        onChange={handleChange}
        type="range"
        value={value}
        placeholder={name}
        min="-100"
        max="100"
      />
      <input
        name={name}
        { ...console.log("here", name)}
        onClick={deleteInput}
        type="button"
        value="X"
      />
    </div>
  );
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = e => {
      this.setState({value: e.target.value });
  };
  handleSubmit = e => {
      e.preventDefault();
      this.props.addInput(this.state.value);
      this.setState({value: "" });
  };
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="addInput"
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="addInput"
        />
        <input
          type="submit"
          value="ADD"
        />
      </form>
    );
  }
}
export default ({fields, handleChange, addInput, deleteInput }) => {
  let inputs = [];
  for (const [key, value] of Object.entries(fields)) {
    inputs.push(input(key, value, handleChange, deleteInput));
  }
  return (
    <div>
      <Options addInput={addInput} />
      {inputs}
    </div>
  );
};