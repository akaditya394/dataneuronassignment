import "./App.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import AddIngridients from "./components/AddIngridients/AddIngridients";
import Recipe from "./components/Recipe/Recipe";
import { useSelector } from "react-redux";
import { selectrecipe } from "./redux/slices/recipeReducer";
import Nutrients from "./components/Nutrients/Nutrients";

function App() {
  const recipe = useSelector(selectrecipe);

  return (
    <div className="App">
      <PanelGroup direction="vertical">
        <Panel>
          <PanelGroup direction="horizontal">
            <Panel defaultSize={30}>
              <AddIngridients />
            </Panel>
            <PanelResizeHandle className="handleResizeHorizontal" />
            <Panel>
              <Recipe recipe={recipe} />
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle className="handleResizeVertical" />
        <Panel>
          <Nutrients />
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default App;
