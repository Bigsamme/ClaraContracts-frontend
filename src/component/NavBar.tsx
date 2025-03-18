import { style } from "framer-motion/client";
import styles from "@/styles/NavBar.module.css";



export default function NavBar() {


    return (
        <div className={`${styles.navbar} flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono`} role="navigation">
            <div className="pl-8">
                <a href="#" className="text-2xl font-bold">Logo</a>
            </div>
            <div className="pr-8 md:block hidden">
                <a href="#" className="p-4">Home</a>
                <a href="#" className="p-4">Services</a>
                <a href="#" className="p-4">About</a>
                <a href="#" className="p-4">Contact</a>
            </div>
            <div className="md:hidden block">
                <button className="mobile-menu-button p-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>

    );


}