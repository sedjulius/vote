import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import {Data,sponsors} from '../Data/Data';
import { Divider } from 'antd';
import { BsHandThumbsUp } from 'react-icons/bs';

const Contestants= Data
export default function Home() {
 

  return (
    <div className="">
      <div className=' flex flex-col justify-center items-center'>
        <div className="bg-custom-color py-[20px] w-full shadow">
          <h1 className="text-white text-[80px] font-serif text-center py-10">KIDZ DANCE SHOW</h1>
          {
            sponsors.map((item,index)=>(
              <div key={index}>
                <span>{item.name}</span>
                <div >
                  <img className='h-fit w-fit' src={item.Pic} alt="" />
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex flex-col gap-2 justify-center items-center bg-white w-full h-fit p-5">
          <div className="w-[60%] px-1 border border-gray-300 rounded-lg flex items-center shadow">
            <div className="p-2 ">
              <SearchOutlinedIcon />
            </div>
            <input
              type="text"
              placeholder="Search by name or code"
              className="w-full px-4 py-2 outline-none"
            />
          </div>
          <h1>Who's your favourite ? <span className='text-blue-500 cursor-pointer hover:underline'>Click here to see who's leading</span></h1>
          <div className="w-full home_frame flex items-center justify-evenly flex-wrap gap-10 p-2">
            {
              Contestants.map((contestant,index)=>(
                <div key={index} className='h-fit flex flex-col items-center w-[18%] gap-2'>
                  <div className='flex max-h-[300px] w-fit h-[250px] shadow rounded-md '>
                    <img className='rounded-md object-cover bg-center flex items-center' src={contestant.picture} alt="" />
                  </div>
                  <span>{contestant.name}</span>
                  <button className='flex  items-center gap-1 border border-blue-300 px-5 py-1 hover:bg-green-700 rounded-md hover:text-white'><BsHandThumbsUp/>Vote</button>
                  <Divider className='shadow bg-blue-100'/>
                </div>
              ))
            }
          </div>
        </div>
        <button className="contact_us fixed bottom-10 right-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-400">
          <SupportAgentOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
