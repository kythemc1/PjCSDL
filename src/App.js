import './App.css';
import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn.tsx";
import NavBar from "./pages/NavBar/index.tsx";
import Home from "./pages/Home/Home.tsx";
import Man from "./pages/Man/index.tsx";
import Woman from "./pages/Woman/index.tsx";
import Children from "./pages/Children";
import {Provider} from 'react-redux';
import {store,persistor} from "./store/reduxProvider";
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  return (
      <>
<Provider store={store}>
    <PersistGate  persistor={persistor}>
        <Router>
            <NavBar/>
            <Routes>

                <Route path="/"  element={<Home/>} />
                <Route path="/Man"  element={<Man/>} />
                <Route path="/Woman"  element={<Woman/>} />
                <Route path="/Children"  element={<Children/>} />
                <Route path="/SignIn"  element={<SignIn/>} />
            </Routes>
        </Router>
    </PersistGate>

</Provider>
      </>
  );
}

export default App;
