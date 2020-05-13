import React from "react";
import { Link } from 'react-router-dom';

//style
import './styles/OpcionMenu.css';

class OpcionMenu extends React.Component {
  render() {
    return (
      <Link className="list opcion col-2" to={this.props.url}>
        {this.props.opcion}
      </Link>
    );
  }
}

export default OpcionMenu;