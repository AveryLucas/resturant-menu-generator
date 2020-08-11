import React from "react";
import Item from "./Item";
import TextareaAutosize from "react-autosize-textarea";

class Menu extends React.Component {
  renderSection = (section) => {
    return (
      <div className="menu-section">
        <div className="menu-section-header">
          <p className="menu-section-title-sub"> </p>
          <h3 className="menu-section-title">{section.title}</h3>
          <p className="menu-section-title-post"> </p>
        </div>
        {section.items.map((item) => {
          return (
            <Item
              name={item.name}
              price={item.price}
              description={item.description}
              id={item.id}
              setSelectedItem={this.props.setSelectedItem}
              swapItemIndexes={this.props.swapItemIndexes}
            />
          );
        })}
      </div>
    );
  };
  render() {
    // console.log(this.props);
    const { description, id, sections, title } = this.props.menu;
    return (
      <div className="section-col">
        <h2>{title}</h2>
        {/* <p>{descriptions}</p> */}
        <TextareaAutosize
          placeholder="description"
          defaultValue={description}
          spellCheck={false}
        />
        {sections.map((section) => {
          return this.renderSection(section);
        })}
      </div>
    );
  }
}

export default Menu;
