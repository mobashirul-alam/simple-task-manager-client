import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer class="footer footer-center p-6 mt-8 bg-base-300 text-base-content">
            <div>
                <p className='font-medium'>Copyright © {year} - All rights reserved by - Simple Task Manager.</p>
            </div>
        </footer>
    );
};

export default Footer;