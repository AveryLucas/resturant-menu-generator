import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";

// function renderSectionColumns(col) {
//   return (
//     <div className="menu-section-col-container">
//       {m.columns.map((col) => {
//         return (
//           <div className="section-col">
//             {col.map((section) => {
//               return renderSection(section);
//             })}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// function renderSection(section) {
//   return (
//     <div className="menu-section">
//       <div className="menu-section-header">
//         <p className="menu-section-title-sub"> </p>
//         <h3 className="menu-section-title">{section.title}</h3>
//         <p className="menu-section-title-post"> </p>
//       </div>
//       {section.items.map((item) => {
//         return renderItem(item);
//       })}
//     </div>
//   );
// }

// function renderItem(item) {
//   return (
//     <div className="menu-section-item">
//       <div>
//         <h3 className="section-item-name">{item.name}</h3>
//         <p className="section-item-price">{item.price}</p>
//       </div>
//       <p className="section-item-description">{item.description}</p>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      {/* <ItemList /> */}
      <Main />

      {/* <div
        style={{
          position: "fixed",
          left: "500px",
          width: "100px",
          height: "100px",
          background: "#000",
        }}
        onMouseOver={() => console.log("WORKING")}
      /> */}
      {/* <div id="sidebar">
        <div id="navigation">
          <a className="active" href="#">
            Food
          </a>
          <a href="#">Beverages</a>
          <a href="#">Deserts</a>
        </div>
      </div>
      <div className="menu">
        <div className="menu-container">
          <div className="menu-quickbits">
            <h3>Food</h3>
            <p>
              All entrees served with soup or salad, (French, Russian, ranch,
              vinaigrette, or Roquefort (add 2.25) dressing), goulash soup (add
              2.5). Choice of two sides: spatzle, mashed potato, fries, seasonal
              vegetable, sauerkraut or red cabbage
            </p>
          </div>
          {renderSectionColumns()}
        </div>
      </div> */}
    </div>
  );
}

export default App;
