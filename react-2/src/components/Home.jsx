import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="navvy">
                    <div className="head">
                        <h1>Shopjo</h1>
                    </div>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/'>About us</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Products</Link>
                    </nav>
                </div>
                <div className='content'>
                    <div className='homehead'>
                        <h1>
                            This is a Homepage
                        </h1>
                    </div>
                    <div className='btn'>
                        <button>
                        <Link to='/login'>Login</Link>
                        </button>
                        <button>
                        <Link to='/signup'>Signup</Link>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
