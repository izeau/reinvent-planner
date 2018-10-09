import React, { Component } from "react";
import Filters from "./Filters";
import Button from "./Button";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="Header">
        <div>
          <h1>re:Invent Planner</h1>
          <p>
            Plan your AWS re:Invent 2018 schedule by visualizing it in a
            calendar.
          </p>
        </div>
        <div>
          <Button onClick={this.props.showEventsLoader}>
            {this.props.hasEvents ? "Re-Import Sessions" : "Get Started"}
          </Button>
          <Filters
            events={this.props.events}
            filteredEvents={this.props.filteredEvents}
            onFilteredEvents={this.props.onFilteredEvents}
          />
        </div>
      </header>
    );
  }
}

export default Header;
