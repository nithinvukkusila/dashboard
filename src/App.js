import "./App.scss";
import { useState } from "react";
import Drawer from "./components/Drawer";
import UserDetails from "./components/UserDetails";
import MarketInSights from "./components/MarketInSights";
function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="App">
      
      <div className="main-container">
        <Drawer isOpen={isDrawerOpen} isDrawerOpen={toggleDrawer} />
        <UserDetails isDrawerOpen={toggleDrawer} />
      </div>
    </div>
  );
}

export default App;
