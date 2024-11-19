import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import MainPage from "./pages/Main";
import SignupPage from "./pages/Signup";
import MyClubPage from "./pages/Myclub";
import ClubFinder from "./pages/ClubFinder";
import ClubCreation from "./pages/ClubCreation";
import ClubList from "./pages/ClubList";
import LoginPage from "./pages/Login";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <MainPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "myclub", element: <MyClubPage /> },
      {
        path: "clubfinder",
        element: <ClubFinder />,
      },
      { path: "clubfinder/createclub", element: <ClubCreation /> },
      { path: "clublist", element: <ClubList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
