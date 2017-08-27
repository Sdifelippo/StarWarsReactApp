import React, {Component} from 'react';
import "../styles/App.css";

//renders form that takes name and displays below
class form extends Component {
    render () {
    return (
      <div className="card-form">
        <div className="card-block">
          <h2>className="card-title">What"'"s your name Pilot!</h2>
            <form onSubmit={this.props.handleSubmit}>
            <div className="form-group">
              <input className="form-status col-md-4 offset-md-4" id="pilotName"            onChange={this.props.handleNameChange} name="name" type="text"      value={this.props.pilot} placeholder="Enter your name Pilot"/>
            </div>
          <button type="submit" className="button btn-primary">Submit</button>
        </form>
      <h1>{this.props.pilot}</h1>
    </div>
  </div>
);
}
}
export default form;
