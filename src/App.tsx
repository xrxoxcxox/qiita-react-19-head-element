import { Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Dashboard } from "./Dashboard";
import { Header } from "./Header";
import { Home } from "./Home";
import { NoMatch } from "./NoMatch";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
