import { BrowserRouter, Route } from "react-router-dom"
import { AppRoutes } from "./AppRoutes"
import Layout from "./layout/Layout"

export default function App() {
  return (
    <BrowserRouter>
        <Route element={ <Layout /> }> 
            <AppRoutes/>
        </Route>
    </BrowserRouter>
  )
}