import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const fetchProducts = async () => {
        try {
            const url = "https://couponcodes-api.vercel.app//products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            };
            const response = await fetch(url, headers);
            const result = await response.json();
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="home-container">
            <header className="header">
                <div className="logo">
                    <h1>SwapCode</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </nav>
            </header>

            <main className="main-content">
                <section className="welcome-section">
                    <h2>Welcome to SwapCode, {loggedInUser}</h2>
                    <p>Find the best deals and discounts on your favorite products!</p>
                </section>

                <section id="products" className="products-section">
                    <h3>Available Products</h3>
                    <div className="products-grid">
                        {products && products.map((item, index) => (
                            <div className="product-card" key={index}>
                                <h4>{item.name}</h4>
                                <p>Price: {item.price}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer id="contact" className="footer">
                <div className="contact-info">
                    <h4>Contact Us</h4>
                    <p>Email: support@swapcode.com</p>
                    <p>Phone: +1234567890</p>
                </div>
                <div className="social-media">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
            </footer>

            <ToastContainer />
        </div>
    );
}

export default Home;
