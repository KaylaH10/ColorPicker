import { useState } from 'react'

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")

  const Color = ({color, setSelectedColor}) => {
    return (
    <div className={color} onClick={() => setSelectedColor(color)}>
    </div>
    )
  };

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
        <div id="colors-list">
          {/* <Color className="violet"/>
          <Color className="green"/>
          <Color className="blue"/> */}
</div>
      </div>
      <div id="colors-list">
        <Color color="violet" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
