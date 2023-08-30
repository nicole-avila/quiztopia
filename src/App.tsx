import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Profile from "./Views/Profile/Profile";
import Form from "./Views/Form/Form";
import Game from "./Views/Game/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
