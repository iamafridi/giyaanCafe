import profile from '../../assets/image/blogger dp.jpg'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2' >
            <h1 className='text-4xl font-bold' >Giyan Er Duniya</h1>
            <img className='rounded-full w-10' src={profile} alt="" />
      
        </header>
    );
};

export default Header;