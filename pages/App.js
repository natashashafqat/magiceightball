// import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js'
import Link from 'next/link'
import React, { Component } from "react";
import { spring } from 'popmotion';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Circle } from 'react-shapes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      response: undefined
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      count: parseInt(localStorage.getItem("count")) || 0
    });
  }

  incrementCounter() {
    const count = this.state.count + 1;
    localStorage.setItem("count", count);
    this.setState({
      count: count
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('/', { method: 'POST' })
    .then(response => response.text())
    .then(textValue => this.setState({ response: textValue }));
  }

  render() {
    return (
        <main>
          <Header />
            <div style={{paddingTop: "150px"}}>
              <Typography variant="title" color="inherit">
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <h1 style={{ fontFamily:"Arial", fontSize:"50px" }}>Magic 8 Ball</h1>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <form className="question-input" onSubmit={this.handleSubmit}>
                    <TextField
                      id="inputquestion"
                      autoComplete="off"
                      placeholder="Ask your question..."
                      margin="normal"
                      style={{ width:"200px", paddingRight:"10px" }}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      onClick={ this.incrementCounter.bind(this) }
                      id="submitquestion"
                      style={{ width: "100px", fontSize:17 }}>Shake Me!
                    </Button>
                  </form>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <p>Magic 8 Ball says... {this.state.response}</p>
                </div>
              </Typography>
            </div>
        </main>
    )
  }
}

export default App;
