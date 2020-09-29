import React from "react";
import SideBar from "./SideBar";
import AppMain from "./AppMain";

class App extends React.Component {
  render() {
    return (
      <div>
        <SideBar />
        <AppMain />
      </div>
    );
  }
}
export default App;
