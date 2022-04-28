import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
// Components
import AboutUs from "./components/AboutUs";
import SideBar from "./components/SideBar";
import Contacts from "./components/Contacts";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="main-container">
        <div className="container">
          <SideBar />
          <div className="dashboard__container">
            <Routes>
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
