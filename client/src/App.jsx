import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./AppRoutes"
import { Header } from './layout/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}