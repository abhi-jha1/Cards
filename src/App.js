import React from 'react';
import './App.css'
class App extends React.Component {
  constructor() {
    super();
    this._handleKeyPress = this._handleKeyPress.bind(this);

    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: ''

    }


  }

  componentDidMount() {
    for (let x in this.refs) {
      this.refs[x].onkeyup = (e) =>
        this._handleKeyPress(e, this.refs[x]);

    }
    this.refs.input1.focus();
  }



  _handleKeyPress(e, field) {

    let maxLength = e.target.maxLength;
    let inputLength = e.target.value.length;
    if (inputLength >= maxLength) {

      let next = this.refs[field.name].nextSibling;
      if (next && next.tagName === "INPUT") {
        next.focus();
      }
    }
    else if (inputLength === 0) {

      let previous = this.refs[field.name].previousSibling;
      if (previous && previous.tagName === "INPUT") {
        previous.focus();
      }
    }
  }

  validate1 = (e) => {
    const value = (e.target.validity.valid) ? e.target.value : this.state.value1;

    this.setState({ value1: value });
  }
  validate2 = (e) => {
    const value = (e.target.validity.valid) ? e.target.value : this.state.value2;

    this.setState({ value2: value });
  }
  validate3 = (e) => {
    const value = (e.target.validity.valid) ? e.target.value : this.state.value3;

    this.setState({ value3: value });
  }
  validate4 = (e) => {
    const value = (e.target.validity.valid) ? e.target.value : this.state.value4;

    this.setState({ value4: value });
  }
  validate5 = (e) => {

    const value = (e.target.validity.valid) ? e.target.value : this.state.value5;

    this.setState({ value5: value });

  }
  validate6 = (e) => {
    const value = (e.target.validity.valid) ? e.target.value : this.state.value6;

    this.setState({ value6: value });
  }




  render() {
    return (
      <span >

        <form style={{ textAlign: "center" }}>
          <h3>Card Number*</h3>
          <input className='input' type="text" pattern="[0-9]*" name="input1" ref='input1' maxLength="4" onInput={this.validate1} value={this.state.value1} placeHolder='****' />
          <input className='input' type="text" pattern="[0-9]*" name="input2" ref='input2' maxLength="4" onInput={this.validate2} value={this.state.value2} placeHolder='****' />
          <input className='input' type="text" pattern="[0-9]*" name="input3" ref='input3' maxLength="4" onInput={this.validate3} value={this.state.value3} placeHolder='****' />
          <input className='input' type="text" pattern="[0-9]*" name="input4" ref='input4' maxLength="4" onInput={this.validate4} value={this.state.value4} placeHolder='****' />
          <br /> <input className="input1" type="text" pattern="[0-9]*" name="input5" ref="input5" placeHolder="MM / YY" maxLength='4' onInput={this.validate5} value={this.state.value5} />
          <input className="input" type="password" pattern="[0-9]*" name="input6" ref="input6" placeHolder='cvv' pattern="[0-9]*" onInput={this.validate6} value={this.state.value6} maxLength='3' />




        </form>
      </span>
    );
  }
}

export default App;