import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
<footer className="bg-primary-800 text-white ">
    <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
                <h4 className="text-lg font-bold">About Us</h4>
                <p className="mt-2">A brief description of your company.</p>
            </div>
            <div>
                <h4 className="text-lg font-bold">Customer Service</h4>
                <ul className="mt-2">
                    <li><a href="#" className="footer-link">FAQs</a></li>
                    <li><a href="#" className="footer-link">Contact Us</a></li>
                    <li><a href="#" className="footer-link">Returns & Exchanges</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-bold">Policies</h4>
                <ul className="mt-2">
                    <li><a href="#" className="footer-link">Privacy Policy</a></li>
                    <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                    <li><a href="#" className="footer-link">Shipping Information</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-bold">Quick Links</h4>
                <ul className="mt-2">
                    <li><a href="#" className="footer-link">Products</a></li>
                    <li><a href="#" className="footer-link">Specials</a></li>
                    <li><a href="#" className="footer-link">New Arrivals</a></li>
                </ul>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
                <h4 className="text-lg font-bold">Newsletter Signup</h4>
                <form className="mt-2" onSubmit={(e)=>e.preventDefault()}>
                    <input type="email" placeholder="Enter your email" className="bg-primary-700 text-white px-4 py-2 rounded mb-4 mr-2"/>
                    <button type="submit" className="bg-primary text-white px-4 py-2 rounded  bg-slate-700 border-[1px]">Subscribe</button>
                </form>
            </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
                <h4 className="text-lg font-bold">Social Media</h4>
                <ul className="mt-2 flex gap-4 text-2xl">
                    <li><a href="#" className="footer-link"><FaFacebook/></a></li>
                    <li><a href="#" className="footer-link "><FaTwitter/></a></li>
                    <li><a href="#" className="footer-link"><FaInstagram/></a></li>
                </ul>
            </div>

        </div>
        <div className="text-center mt-4">
            <p className="text-primary-300">&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
    </div>
</footer>
  )
}

export default Footer