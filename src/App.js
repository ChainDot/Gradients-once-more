import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Redirect,
} from "react-router-dom";
import Footer from "./components/Footer";
import GradientFullPage from "./components/GradientFullPage";
import GradientsMain from "./components/GradientsMain";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <Router>
        <Switch>
          <Route exact path="/" component={GradientsMain} />
          <Route exact path="/gradient/:id" component={GradientFullPage} />
          <Route path="*" component={NotFoundPage} />
          <Redirect to="*" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
