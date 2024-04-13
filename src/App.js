import './App.css';
import AboutPage from './AboutPage';
import Main from './MainPage'
import CatalogPage from './CatalogPage'
import FotoStudioPage from './PageFotoStudio'
import DaivingPage from './PageDaiving'
import ParashoutPage from './PageParashout'
import OthersPage from './PageOthers'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/AboutPage",
    element: <AboutPage />,
  },
  {
    path: "/CatalogPage",
    element: <CatalogPage />,
  },
  {
    path: "/FotoStudioPage",
    element: <FotoStudioPage />,
  },
  {
    path: "/DaivingPage",
    element: <DaivingPage />,
  },
  {
    path: "/ParashoutPage",
    element: <ParashoutPage />,
  },
  {
    path: "/OthersPage",
    element: <ParashoutPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;