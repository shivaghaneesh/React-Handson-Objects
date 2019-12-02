import ReactDOM from "react-dom";
import React from "react";
import Company from "./Company";
import Server from "./Server";
import Site from "./Site";
const companies = {
  cts: ["cs1", "cs2"],
  info: ["is1", "is2"]
};
const servers = {
  cs1: ["cs1site1", "cs1site2"],
  cs2: ["cs2site1", "cs2site2"],
  is1: ["is1site1", "is1site2"],
  is2: ["is2site1", "is2site2"]
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCompany: null,
      selectedServer: null
    };
    this.companyHandleClick = this.companyHandleClick.bind(this);
    this.serverHandleClick = this.serverHandleClick.bind(this);
  }

  companyHandleClick(company) {
    //console.log(company);
    this.setState({ selectedCompany: company });
  }

  serverHandleClick(server) {
    console.log(server);
    this.setState({ selectedServer: server });
  }

  render() {
    // console.log(companies[this.state.selectedCompany]);
    return (
      <div>
        {Object.keys(companies).map((item, i) => (
          <Company
            key={i}
            company={item}
            companyHandleClick={this.companyHandleClick}
          />
        ))}
        <Server
          server={companies[this.state.selectedCompany]}
          serverHandleClick={this.serverHandleClick}
        />

        <Site
          site={servers[this.state.selectedServer]}
          serverHandleClick={this.serverHandleClick}
        />
      </div>
    );
  }
}

const rootelement = document.getElementById("root");

ReactDOM.render(<App />, rootelement);
