import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./home/HomePage";
import { Footer } from "./components/footer/Footer";
// import { SinglePage } from "./components/watch/SinglePage";
import SinglePage from "./components/watch/SinglePage";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/singlepage/:id" component={SinglePage} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
