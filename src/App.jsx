import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Characters from './pages/Characters'
import Quote from './pages/Quote'
import QuoteDetail from './pages/QuoteDetail'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/characters" element={<Characters />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/quote/:id" element={<QuoteDetail />} />
          </Route>
          <Route path="*" element={<Navigate to="/characters" replace />} />
        </Routes>
      </main>
    </>
  )
}
