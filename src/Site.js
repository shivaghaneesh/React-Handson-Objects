import React from "react";

class Site extends React.Component {
  handleClick() {
    console.log(this.props.detail);
  }

  render() {
    const site = this.props.site || [];
    return (
      <div>
        <ul>
          {site.map((item, i) => (
            <li key={i} onClick={() => this.props.siteHandleClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Site;
