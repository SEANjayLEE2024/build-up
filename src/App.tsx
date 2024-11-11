import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import MainPage from "./pages/Main";
import SignupPage from "./pages/Signup";
import MyClubPage from "./pages/Myclub";
import ClubFinder from "./pages/ClubFinder";
import ClubCreation from "./pages/ClubCreation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      { index: true, element: <MainPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "myclub", element: <MyClubPage /> },
      {
        path: "clubfinder",
        element: <ClubFinder />,
      },
      { path: "clubfinder/createclub", element: <ClubCreation /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
