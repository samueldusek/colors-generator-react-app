import Palette from "./Palette";
import seedColors from "./SeedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[3])} />
    </div>
  );
}

export default App;
