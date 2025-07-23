import logo from '../assets/logo.svg';
import { HeaderItem } from './ui/HeaderItem';
import user from "../assets/user.png"


export const Header = () => {

  return (
    <>
        <div className='flex items-center justify-between p-5'>  
          <div className="flex gap-8 items-center">
            <img src={logo} alt="logo" className='w-[80px] md:w-[105px] object-cover p-2'/>
            <HeaderItem/>
          </div>
          <img src={user} alt="user" className='w-[40px] rounded-full'/>
        </div>
    </>
  )
}
