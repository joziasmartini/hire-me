import { AccessibilityNewOutlined } from "@mui/icons-material";
import "./App.css";
import LinearWithValueLabel from "./components/LinearProgressWithLabel";

function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <header className="flex flex-col justify-center items-center">
        <span className="block mt-4 text-3xl">
          Hey, this{" "}
          <AccessibilityNewOutlined className="text-7xl text-green-700" /> is me
        </span>
        <span className="block text-neutral-500">
          I'm waiting for you to hire me
        </span>
      </header>

      <div className="w-2/4 my-4">
        <LinearWithValueLabel />
      </div>
    </div>
  );
}

export default App;
