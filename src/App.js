import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
function App() {
  const user = false;
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate replace to='/' />}
        />
        <Route
          path='/register'
          element={!user ? <Register /> : <Navigate replace to='/' />}
        />
      </Routes>
    </div>
  );
}

export default App;
