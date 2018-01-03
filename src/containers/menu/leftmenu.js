import React, { Component } from 'react';

import '../../index.css';

class LeftMenu extends Component {
  render() {
    return (
      <nav id="sidebar">
          <div className="sidebar-header">
              <div className="logo"></div>
          </div>

          <ul className="list-unstyled components">
              <p>Dummy Heading</p>
              <li className="active">
                  <a href="/model">Model Page</a>
              </li>
              <li className="active">
                  <a href="/visualization">Visualization</a>
              </li>
              <li>
                  <a href="#">Dummy</a>
                  <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                  <ul className="collapse list-unstyled" id="pageSubmenu">
                      <li><a href="#">Page 1</a></li>
                      <li><a href="#">Page 2</a></li>
                      <li><a href="#">Page 3</a></li>
                  </ul>
              </li>

          </ul>


      </nav>

    );
  }
}

export default LeftMenu;
