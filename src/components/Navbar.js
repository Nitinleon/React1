import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import '../assets/styles/Navbar.css'
import Login from './Login';
import Home from './Home';
import Register from './Register';
import About from './About';
function Navbar(){
    return(
        
        <BrowserRouter>
            <nav>
                <ul>
                    <li className='actives'>
                        <Link to='/home' className='Link'>Home</Link>
                    </li>
                    <li className='active'>
                        <Link to='/' className='Link'>Login</Link>
                    </li>
                    <li className='activess'>
                        <Link to='/register' className='Link'>Register</Link>
                    </li>
                    <li className='activesss'>
                        <Link to='/about' className='Link'>About</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Login/>}/>
                <Route exact path='/home' element={<Home/>}/>
                <Route exact path='/register' element={<Register/>}/>
                <Route exact path='/about' element={<About/>}/>

            </Routes>
        </BrowserRouter>
    )
}
export default Navbar;