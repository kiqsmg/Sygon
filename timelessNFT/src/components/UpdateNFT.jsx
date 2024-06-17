// Overall this component renders a modal that allows the user to update the price of an NFT by interacting with the blockchain service


import {
  useGlobalState,
  setGlobalState,
} from '../store'
//import the updateNFT function from a local module, it handles updating NFT details on the blockchain
// import { updateNFT } from '../Blockchain.Services'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'


const UpdateNFT = () => {
  // use custom hooks to retrieve global state variables
  const [modal] = useGlobalState('updateModal')
  //const [nft] = useGlobalState('nft')
  const [price, setPrice] = useState('')

  // Asyncronous fucntion to handle the form submission, it updates the NFT with new NFT details
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!price || price <= 0) return
 
    setGlobalState('modal', 'scale-0')
  }

  const closeModal = () => {
    setGlobalState('updateModal', 'scale-0')
    resetForm()
  }

  const resetForm = () => {
    setPrice('')
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
      justify-center bg-black bg-opacity-50 transform
      transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-400">Title</p>            
            <button
              type="button"
              onClick={() => setGlobalState('updateModal', 'scale-0')}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes className="text-gray-400" />
            </button>
          </div>

          <div className="flex flex-row justify-center items-center rounded-xl mt-5">
           <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
              <img
                alt="NFT"
                className="h-full w-full object-cover cursor-pointer"
                src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg"
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
                type="number"
                step={0.01}
                min={0.01}
                name="price"
                placeholder="Price (Eth)"
                onChange={(e) => setPrice(e.target.value)}
                required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="flex flex-row justify-center items-center
             w-full text-white text-md bg-[#e32970]
             hover:bg-[#bd255f] py-2 px-5 rounded-full
             drop-shadow-xl border border-transparent
             hover:bg-transparent hover:text-[#e32970]
             hover:border hover:border-[#bd255f]
             focus:outline-none focus:ring mt-5"
          >
            Update Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateNFT