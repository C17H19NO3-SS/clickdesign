import { BrowserRouter, StaticRouter, Route, Routes } from "react-router";
import "./index.css";
import { ScrollToTop } from "./Components/ScrollToTop";
import { Header } from "./Components/Header/Header";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";
import { MoccaMoon } from "./Pages/Projects/MoccaMoon";
import { Hype } from "./Pages/Projects/Hype";
import { TTopic } from "./Pages/Projects/TTopic";
import { CMDAluminyum } from "./Pages/Projects/CMDAluminyum";
import { Parcadolu } from "./Pages/Projects/Parcadolu";
import { TwoShine } from "./Pages/Projects/TwoShine";
import { KSKStore } from "./Pages/Projects/KSKStore";
import { Blavi } from "./Pages/Projects/Blavi";

export interface AppProps {
  path?: string;
}

export function App({ path = "/" }: AppProps) {
  const content = (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/projects/moccamoon" element={<MoccaMoon />} />
        <Route path="/projects/MoccaMoon" element={<MoccaMoon />} />
        <Route path="/projects/hype" element={<Hype />} />
        <Route path="/projects/Hype" element={<Hype />} />
        <Route path="/projects/t-topic" element={<TTopic />} />
        <Route path="/projects/T-Topic" element={<TTopic />} />
        <Route path="/projects/ttopic" element={<TTopic />} />
        <Route path="/projects/TTopic" element={<TTopic />} />
        <Route path="/projects/cmd-aluminyum" element={<CMDAluminyum />} />
        <Route path="/projects/CMD-Aluminyum" element={<CMDAluminyum />} />
        <Route path="/projects/cmdaluminyum" element={<CMDAluminyum />} />
        <Route path="/projects/CMDAluminyum" element={<CMDAluminyum />} />
        <Route path="/projects/parcadolu" element={<Parcadolu />} />
        <Route path="/projects/Parcadolu" element={<Parcadolu />} />
        <Route path="/projects/twoshine" element={<TwoShine />} />
        <Route path="/projects/TwoShine" element={<TwoShine />} />
        <Route path="/projects/kskstore" element={<KSKStore />} />
        <Route path="/projects/KSKStore" element={<KSKStore />} />
        <Route path="/projects/blavi" element={<Blavi />} />
        <Route path="/projects/Blavi" element={<Blavi />} />
      </Routes>
    </>
  );

  if (typeof window === "undefined") {
    return <StaticRouter location={path}>{content}</StaticRouter>;
  }

  return <BrowserRouter>{content}</BrowserRouter>;
}

export default App;
