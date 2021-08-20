import { Provider } from "react-redux";
import store from "./state/store";
import Posts from "./Posts";
import Post from "./Post";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route component={Posts} path="/" exact />
          <Route component={Post} path="/post/:id" />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
