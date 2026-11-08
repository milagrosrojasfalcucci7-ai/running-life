import { createBrowserRouter } from 'react-router-dom'
import Home from './componentes/pages/Home'
import Layout from './componentes/layout/Layout'
import KitCarrera from "./componentes/pages/KitCarrera";
import Formulario from "./componentes/pages/Formulario";
import Galeria from "./componentes/Galeria";
import Planes from './componentes/pages/Planes';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "kitcarrera",
        element: <KitCarrera />
      },
      {
        path: "formulario",
        element: <Formulario />
      },
      {
       path: "galeria",
       element: <Galeria />
      },
      {
        path: "planes",
        element: <Planes />   
      },
      {
        path: "*",
        element: (
          <div>
            <h1>Error 404</h1>
            <p>Pagina no encontrada</p>
          </div>
        )
      }
    ]
  }
])
