import { 
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from 'react-icons/hi2';
import {
  HiPlus, 
//   HiDotsVertical
} from "react-icons/hi"

export const HeaderItem = () => {
    
    const menu=[
        {
        name:'HOME',
        icon:HiHome
        },
        {
        name:'SEARCH',
        icon:HiMagnifyingGlass
        },
        {
        name:"WATCH LIST",
        icon:HiPlus
        },
        {
        name:'ORIGINALS',
        icon:HiStar
        },
        {
        name:'MOVIES',
        icon:HiPlayCircle
        },
        {
        name:'SERIES',
        icon:HiTv
        }
    ];

    return (
    <div className='flex gap-8'>
        {menu.map((item, idx) => (
            <div key={idx} className='flex text-white items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8'>
                <item.icon size={20}/>
                <span>{item.name}</span>
            </div>
        ))}
    </div>
  )
}
