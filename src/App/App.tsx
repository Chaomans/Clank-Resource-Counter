import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  ),
  {
    basename: import.meta.env.PROD ? "/Clank-Resource-Counter/" : "/",
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
