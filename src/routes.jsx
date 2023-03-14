import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import CardAluno from './components/views';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/card' element={<CardAluno />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;


