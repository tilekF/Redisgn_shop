import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout/layout.jsx';
import MainPage from "./pages/MainPage/mainPage.jsx";
import SideBar from "./pages/sideBar/SideBar.jsx";

function App() {
  return (
      <>
          <Router>
              <Routes>
                <Route path="" element={<Layout />}>
                    <Route
                        path="/"
                        element={<MainPage/>}
                    />
                    <Route
                    path="/MessageConsultant"
                    element={<SideBar/>}
                    />
                </Route>
              </Routes>
          </Router>
      </>
  );
}

export default App;
