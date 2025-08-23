import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { Courses } from './pages/Courses'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/courses' element={<Courses />} />
        </Routes>
    )
}