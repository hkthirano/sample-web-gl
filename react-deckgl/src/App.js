import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Content } from './components/content';
import { Home } from './components/home';
import { NotFound } from './components/not_found';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Hello world</h1>
        <menu>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/content'>Content</Link></li>
        </menu>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/content' element={<Content />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
