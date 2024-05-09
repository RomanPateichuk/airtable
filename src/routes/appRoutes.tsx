import {App} from "../App.tsx"
import {useRoutes} from "react-router-dom"
import {Country} from "../components/Country/Country.tsx";



export const AppRoutes = () => {
  return useRoutes([
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/country/:name",
        element: <Country/>,
      },
    ]
  );
}