import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import IMG from '../../../assets/images/Juju-Logo.png';

type NavLink = {
  label: string;
  icon: JSX.Element;
};

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navlinks: NavLink[] = [
    {
      label: 'Chart',
      icon: <BarChartOutlinedIcon style={{ fontSize: '30px' }} />
    },
    {
      label: 'Agent',
      icon: <SupportAgentOutlinedIcon style={{ fontSize: '30px' }} />
    },
    {
      label: 'DarkMode',
      icon: <DarkModeOutlinedIcon style={{ fontSize: '30px' }} />
    }
  ];

  return (
    <nav className={`bg-custom-color sticky top-0 transition-shadow duration-300 ${hasShadow ? 'shadow-lg' : ''}`}>
      <div className="inner flex justify-between items-center px-10">
        <div className="flex justify-center items-center gap-5">
          <img src={IMG} alt="logo" className="w-20 h-20" />
          <h3 className="text-white text-sm font-medium">VOTING MADE EASY FOR YOU!</h3>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex justify-center items-center flex-col mr-5 border-r border-r-gray-300 pr-5">
            <Link to="/">
              <HomeOutlinedIcon style={{ fontSize: '30px' }} className="text-white" />
            </Link>
            <span className="text-white text-[12px] font-medium">Home</span>
          </div>
          <div className='flex gap-5'>
            {navlinks.map((nav, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <Link to="/" className='text-white'>
                  {nav.icon}
                </Link>
                <span className="text-white text-[12px] font-medium">{nav.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="techsupport">
        {/* Assuming TechSupportPopups is another component */}
      </div>
    </nav>
  );
}
