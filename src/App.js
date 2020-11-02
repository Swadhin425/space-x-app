import React from "react";
import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Filters from "./components/Filters";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router";

import { requestRobots } from "./action";
import FliteredCardList from "./components/FliteredCardList";

class App extends React.Component {
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((resopnse) => resopnse.json())
    //   .then((users) => {
    //     this.setState({ robots: users });
    //   });

    this.props.onRequestRobots();
  }
  render() {
    const { onSearchChange, robots, isPending } = this.props;
    return (
      <div>
        <div className="App">
          <Header />
          <div className="left-menu">
            <Filters></Filters>
          </div>
          <div className="right-menu">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <CardList {...props} robots={robots} />}
              />
              <Route
                
                path="/launchYear/:yearId"
                render={(props) => <FliteredCardList {...props}  />}
              />
             
            </Switch>
            
          </div>

          <div className="footer">
            <p>
              <b>Developed By: </b>Swadhin Nayak
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
