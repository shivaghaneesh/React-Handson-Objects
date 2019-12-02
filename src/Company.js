import React from "react";
import Server from "./Server";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCompany: null
    };
  }

  render() {
    return (
      <div>
        <ul>
          <li onClick={() => this.props.companyHandleClick(this.props.company)}>
            {this.props.company}
          </li>
        </ul>
      </div>
    );
  }
}

export default Company;
