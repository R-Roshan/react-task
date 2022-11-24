import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./AppBar";
import { NewsContextPro } from "./NewsApi";
import News from "./components/News";
import Menu from "./components/Menu";
// import "./App.css";

function App() {
  return (
    <>
      <AppBar />
      <Menu />

      <NewsContextPro>
        <News />
      </NewsContextPro>
    </>
  );
}

export default App;
