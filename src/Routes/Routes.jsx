import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Plants from "../pages/Plants/Plants";
import MyProfile from "../pages/Profile/MyProfile";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PlantDetails from "../pages/Plants Details/PlantDetails";
import AllPlants from "../pages/Plants/AllPlants";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PlantNotFound from "../pages/ErrorPage/PlantNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch("/plants.json");
          const data = await res.json();

          const res1 = await fetch("/gardenExpert.json");
          const data1 = await res1.json();

          return { plants: data.slice(0, 8), experts: data1 };
        },
      },
      {
        path: "plants",
        Component: Plants,
        errorElement: <PlantNotFound></PlantNotFound>,
        children: [
          {
            index: true,
            Component: AllPlants,
            loader: async () => {
              const res = await fetch("/plants.json");
              const data = await res.json();
              return data;
            },
          },
          {
            path: ":id",
            element: <PrivateRoute>
              <PlantDetails></PlantDetails>
            </PrivateRoute>,
            loader: async ({params}) => {
              const res = await fetch("/plants.json")
              const data = await res.json()
              const plant = data.find((item)=> item.plantId === Number(params.id))
              return plant;
            },
          },
        ],
      },
      {
        path: "myProfile",
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      },
      {
        path: "login",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
    ],
  },
]);
