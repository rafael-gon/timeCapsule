import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/app.css'

import { Background } from './components/background'
import { Header } from './components/header'
import { Home } from './pages/home';
import { Create } from './pages/create';
import { Update } from './pages/update';

export function App() {
  return (
    <div className='app'>
      <Header />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </Router>

      <Background />
    </div>
  );
}
