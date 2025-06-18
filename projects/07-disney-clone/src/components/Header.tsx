import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <div>
        <img src={logo} alt="logo" className='w-[80px] md:w-[115px] object-cover'/>
    </div>
  )
}
