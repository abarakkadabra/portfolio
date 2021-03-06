import Projects from "./components/Projects";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Toggle from "./components/Toggle";
import { useContext } from "react";
import { ThemeContext } from './components/context'

const App = () => {
  const theme = useContext(ThemeContext);
  const darkTheme = theme.state.darkTheme;

  return <div
  style={{
    backgroundColor: darkTheme ? "#222" : "white",
    color: darkTheme && "white",
  }}>
    <Toggle />
    <Intro />
    <Projects />
    <Contact />

  </div>;
};

export default App;