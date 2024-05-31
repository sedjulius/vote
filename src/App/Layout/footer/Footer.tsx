import{ useState } from 'react';
import IMG from '../../../assets/images/Juju-Logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [footer, setFooter] = useState(false);

    const changeFooter = () => {
        console.log(window.scrollY);
        if (window.scrollY <= 1600) {
            setFooter(true);
        } else {
            setFooter(false);
        }
    };

    window.addEventListener('scroll', changeFooter);

    return (
        <footer className={footer ? "footer bg-gradient-to-l from-blue-500 to-blue-900" : "footer bg-transparent text-white py-20 border-t border-gray-400"}>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between flex-wrap px-4">
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
                        <img id="footerimg" src={IMG} alt="" className="w-20 md:w-24 mb-4 rounded-full shadow-lg transform -rotate-15 bg-blue-900 p-2" />
                        <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                        <ul>
                            <li>Email: easyvotes@gmail.com</li>
                            <li>Phone: +233244784876</li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
                        <h2 className="text-lg font-bold mb-2">Learn More</h2>
                        <ul className="lists">
                            <li><Link to="/" className="text-blue-500 hover:bg-blue-500 hover:text-white block py-1">How EasyVotes Works</Link></li>
                            <li><Link to="/" className="text-blue-500 hover:bg-blue-500 hover:text-white block py-1">Why EasyVotes?</Link></li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
                        <h2 className="text-lg font-bold mb-2">Resources</h2>
                        <ul className="lists">
                            <li><Link to="/" className="text-blue-500 hover:bg-blue-500 hover:text-white block py-1">Help center</Link></li>
                            <li><Link to="/" className="text-blue-500 hover:bg-blue-500 hover:text-white block py-1">Blog</Link></li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap px-4 border-t border-gray-400 py-10">
                    <div className="w-full sm:w-1/2 md:w-3/4">
                        <p className="language flex justify-center items-center border border-gray-300 rounded-md p-2 mb-4">Language . English</p>
                        <div className="inner flex items-center gap-6">
                            <p>© 2024-2024 EasyVote</p>
                            <Link to="/" className="text-blue-500 hover:bg-blue-500 hover:text-white block py-1">Terms</Link>
                            {/* Add more links as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
