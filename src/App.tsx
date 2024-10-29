import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  { path: "/", element: <RootLayout />, id: "root", children: [] },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
