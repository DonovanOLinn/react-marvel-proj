import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider';
import { useAuth, useUser} from 'reactfire'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

let Navbar =  props => {
    const auth = useAuth();

    const {cart} = useContext(DataContext);

    const {status, data: user} = useUser();

    const signin = async () => {
        const provider = new GoogleAuthProvider();
        let u = await signInWithPopup(auth, provider);
        console.log(u)

    }

    const signout = async () => {
        await signOut(auth);
        console.log('signed user out', user);

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to='/'>Donovan Marvel React</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                {status === 'loading' ?
                        <li className="nav-item">
                            <p className="nav-link m-0">Logging in...</p>
                        </li>
                        : user ?
                            <>
                                <li className="nav-item">
                                    <p className="nav-link m-0">Welcome, {user.displayName}!</p>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-sm btn-info mr-2" onClick={signout}>Sign out</button>
                                </li>
                            </>
                            :
                            <li className="nav-item">
                                <button className="btn btn-sm btn-info mr-2" onClick={signin}>Sign in</button>
                            </li>
                }



                    <li className="nav-item active">
                        <Link className="btn btn-sm btn-info" to="/cart">${cart.total.toFixed(2)}</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
}

export default Navbar;