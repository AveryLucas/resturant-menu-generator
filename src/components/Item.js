import React from "react";
import TextareaAutosize from "react-autosize-textarea";
import Draggable from "react-draggable";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: false,
      position: { x: 0, y: 0 },
      dragging: false,
    };
    this.ref = React.createRef();
  }

  onDragStart = (e) => {
    this.setState({ dragging: true });
    document.body.dataset.selected = this.props.id;
  };

  onDragStop = (e) => {
    this.setState({ dragging: false });
    document.body.dataset.selected = null;
  };
  // swapItemIndexes
  onMouseOver = (e) => {
    if (
      document.body.dataset.selected &&
      document.body.dataset.selected != this.props.id
    ) {
      this.props.swapItemIndexes(this.props.id);
    }
  };

  componentDidMount() {
    const { readOnly } = this.props;

    this.setState({ readOnly: readOnly != undefined ? readOnly : true });

    // window.addEventListener("mousedown", (e) => {
    //   if (!(this.ref.current && this.ref.current.contains(e.target))) {
    //     this.setState({ readOnly: true });
    //   }
    // });
  }

  renderItem() {
    const { readOnly, position, dragging } = this.state;
    const { price, name, description } = this.props;
    return (
      <div onMouseOver={this.onMouseOver}>
        <Draggable
          position={position}
          disabled={!readOnly}
          onStart={this.onDragStart}
          onStop={this.onDragStop}
        >
          <div
            className={`menu-section-item readOnly-${readOnly} dragging-${dragging}`}
            ref={this.ref}
            onDoubleClick={() => this.setState({ readOnly: false })}
          >
            <div>
              <TextareaAutosize
                className="section-item-name"
                placeholder="Name"
                defaultValue={name}
                readOnly={readOnly}
                async={true}
              />
              <TextareaAutosize
                className="section-item-price"
                placeholder="Price"
                defaultValue={price}
                async={true}
                readOnly={readOnly}
              />
            </div>
            <TextareaAutosize
              className="section-item-description"
              placeholder="Description"
              defaultValue={description}
              async={true}
              readOnly={readOnly}
            />
          </div>
        </Draggable>
        <div
          className="placeholder"
          style={{
            display: dragging ? "block" : "none",
          }}
        />
      </div>
    );
  }

  render() {
    return this.renderItem();
  }
}

export default Item;
