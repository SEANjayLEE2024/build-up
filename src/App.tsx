import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import MainPage from "./pages/Main";
import SignupPage from "./pages/Signup";
import MyClubPage from "./pages/Myclub";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      { index: true, element: <MainPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "myclub", element: <MyClubPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
