import Palette from "./Palette";
import seedColors from "./SeedColors";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[1]} />
    </div>
  );
}

export default App;
