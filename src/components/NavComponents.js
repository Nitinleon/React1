import '../assests/styles/nav.css'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'

function Login()
{
    return(
        <div style={{
            marginLeft:'20%', 
            backgroundColor:'indigo',
            color: 'white',
            padding: '100px',
            width: '250px',
            borderRadius: '30px',
            marginTop: '-250px',
            marginRight: '20%',
        }}>
            <h3>Login</h3>
            <form>
                <label>Username:
                    <input type="text" />
                </label><br></br>
                <label>Password:
                    <input type="password" />
                </label>
            </form><br></br>
            <button><Link to='/' className='link'>Login</Link></button>
        </div>
    )
}
function Home()
{
    return(
        <div className='eve'>
            <h1>Event Management</h1>
        </div>
    )
}
function  Register()
{
    return(
        <div style={{
            marginLeft: '20%',
            backgroundColor: 'indigo',
            color: 'white',
            padding: '100px',
            width: '200px',
            borderRadius: '30px',
            marginTop:'-200px',
            marginRight:'20%',
        }}>
            <h3>Register Now</h3>
            <form>
                <label>Name:
                    <input type="text" />
                </label><br></br>
                <label>Age:
                    <input type="text" />
                </label>
                <br></br>
            <label>Address:
                <input type="text" />
            </label>
            <br></br>
            <label>
                Email:
                <input type="text" />
            </label>
            </form><br></br>
            <button><Link to='/login' className='link'>REGISTER</Link></button>
        </div>
    )
}
function Navbar()
{
    return (
        <Router>

            <nav>
                <ul>
                    <li className='active'><Link to='/' className='link'>HOME</Link></li>
                    <li className='active'><Link to='/login' className='link'>LOGIN</Link></li>
                    <li className='active'><Link to='/register'className='link'>REGISTER</Link></li>

                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Register/>} />
            </Routes>
        </Router>
    )
}
export default Navbar;