import "./App.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import AddIngridients from "./components/AddIngridients/AddIngridients";

function App() {
  return (
    <div className="App">
      <PanelGroup direction="vertical">
        <Panel>
          <PanelGroup direction="horizontal">
            <Panel defaultSize={30} minSize={20}>
              <AddIngridients />
            </Panel>
            <PanelResizeHandle />
            <Panel minSize={30}>
              <div className="blue">BLUE</div>
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle />
        <Panel>
          <div className="green">Green</div>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default App;
