
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';


export default function Home() {
 

  return (
    <div className="">
      <div className=' flex flex-col justify-center items-center'>
        <div className="bg-custom-color py-[60px] w-full">
          <h1 className="text-white text-[80px] font-serif text-center py-10">KIDZ DANCE SHOW</h1>
        </div>
        <div className="flex justify-center items-center bg-white w-full">
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
          <div className="home_frame flex justify-center flex-wrap gap-8 mt-8">
            
          </div>
        </div>
        <button className="contact_us fixed bottom-10 right-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-400">
          <SupportAgentOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
