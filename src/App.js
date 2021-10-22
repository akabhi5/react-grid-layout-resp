import "./App.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useState } from "react";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

function App() {
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const addGrid = () => {
    const grid = {
      i: Date(),
      x: getRandomInt(1, 10),
      w: getRandomInt(1, 5),
      h: 2,
    };
    setLayout((prevState) => [...prevState, grid]);
  };

  const onDelete = (id) => {
    const arr = layout.filter((data) => (data.i === id ? false : true));
    setLayout(arr);
  };

  return (
    <div className="App">
      <div>
        <button onClick={addGrid}>Add new grid</button>
        <hr />
      </div>
      <ResponsiveReactGridLayout className="layout">
        {layout.map((data) => {
          return (
            <div key={data.i} style={{ border: "1px solid" }}>
              <p>{data.i}</p>
              <button onClick={() => onDelete(data.i)}>delete</button>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
}

export default App;
