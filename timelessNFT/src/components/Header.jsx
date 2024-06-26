// GlobalState is used to manipulate global state within application
//import { useGlobalState } from '../store'
import timelessLogo from '../assets/timeless.png'
// connectWallet is a function that will be used to handle the wallet connection logic
//import { connectWallet } from '../TimelessNFT'


//defie REACT function named Header
const Header = () => {
  // Use the useGlobalState Hook to get the connectedAcoount value from the global state 
  //const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          className="w-32 cursor-pointer"
          src={timelessLogo}
          alt="Timeless Logo"
        />
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Market</li>
        <li className="mx-4 cursor-pointer">Artist</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>

      <button
         className="shadow-xl shadow-black text-white
       bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
         rounded-full cursor-pointer"
      >
        Connect Wallet
      </button>
    </nav>
  )
}

export default Header