import { Provider } from "react-redux";
import store from "./state/store";
import Posts from "./Posts";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
