//Overall this code defines an "Artworks" component as the default export from the module, making t available for import in other files.
// The Artwork component displayes a grid of NFT artworks. It includes functionality to load more artworks and view details of a selected artwork



// useEffect and useState hooks from React are used for managing side effects and state within the components
// import { useEffect, useState } from 'react'
// setGlobalState, useGlobalState, truncate are used for managing global state and truncating text
// import { setGlobalState, useGlobalState, truncate } from '../store'
import { setGlobalState } from '../store'


//define a React function named Artwork
const Artworks = () => {
  //Create a variable to contain the list of NFT artworks, using the useGlobalState hook to get the 'nfts' value from global state
  // const [nfts] = useGlobalState('nfts')
  // local state variable 'end' with a value of 4, and 'setEnd' is a function to update this state... will determine how many NFTs to display initially
  // const [end, setEnd] = useState(4)
  // local state variable 'count' to count the number of NFTs to load when the 'Load More' button is clicked
  // const [count] = useState(4)
  // local state variable 'collection' is an empty array, and 'setCollection' is a function to update this state, the variable stores subset of NFTs to be displayed
  // const [collection, setCollection] = useState([])

  // define the 'setNFT' function, and takes 'nft' as an argument... set the globalState 'nft' to ----> 'nft'
  /*
  const setNFT = (nft) => {
    setGlobalState('nft', nft)
    setGlobalState('showModal', 'scale-100')
  }

  const getCollection = () => {
    return nfts.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [nfts, end])
  */
  

  return (
    <div className="bg-[#151c25] gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          Latest Artworks
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {Array(4)
            .fill()
            .map((nft, i) => (
              <Card key={i + 1} nft={i + 1} />
            ))}
        </div>
        <div className="text-center my-5">
          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f]
            rounded-full cursor-pointer p-2"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}

const Card = ({ nft }) => (
  <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <img
      src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg"
      alt={'Artwork'}
      className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
    />
    <h4 className="text-white font-semibold">NFT #{nft}</h4>
    <p className="text-gray-400 text-xs my-1">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis illum
      sequi rem impedit fugit illo.
    </p>
    <div className="flex justify-between items-center mt-3 text-white">
      <div className="flex flex-col">
        <small className="text-xs">Current Price</small>
        <p className="text-sm font-semibold">0.34 ETH</p>
      </div>
 
      <button
        className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
            hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
        onClick={() => setGlobalState('showModal', 'scale-100')}
      >
        View Details
      </button>
    </div>
  </div>
 )
 

export default Artworks