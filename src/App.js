import FormPage from "./Components/FormPage";
import TariffsPage from "./Components/TariffsPage";

import useDeviceDetect from "./hooks/useDeviceDetect ";

import "./styles/App.scss";

function App() {
  const { isTablet, isMobile, isDesktop } = useDeviceDetect();
  return (
    <div className="App">
      <FormPage />
      <TariffsPage />
    </div>
  );
}

export default App;
