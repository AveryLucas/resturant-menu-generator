import React from "react";
// import TextareaAutosize from "react-autosize-textarea";

import loremMenu from "../loremMenu";
import Menu from "./Menu";
// import Item from "./Item";
// import ItemList from "./ItemList";

const m = loremMenu.generatePage();
console.log(m);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: loremMenu.generatePage(),
      selected: null,
    };
  }

  setSelectedItem = (id) => {};

  swapItemIndexes = (id) => {};

  render() {
    const { menu, selected } = this.state;
    return (
      <div id="menus">
        {menu.columns.map((col, index) => {
          return (
            <div className="menu-column">
              {col.map((menu_data) => {
                return (
                  <Menu
                    menu={menu_data}
                    swapItemIndexes={this.swapItemIndexes}
                    setSelectedItem={this.setSelectedItem}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
