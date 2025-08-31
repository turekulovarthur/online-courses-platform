import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'

import { Home } from './pages/home/Home'
import { Favorites } from './pages/Favorites'
import { Courses } from './pages/Courses'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <Layout /> }>
                <Route index element={<Home />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/courses' element={<Courses />} />
            </Route>
        </Routes>
    )
}