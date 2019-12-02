import React from "react";

class Server extends React.Component {
  render() {
    const server = this.props.server || [];
    return (
      <div>
        <ul>
          {server.map((item, i) => (
            <li key={i} onClick={() => this.props.serverHandleClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Server;
