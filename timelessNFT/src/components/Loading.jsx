// Overall this component displays a loading modal overlay with a spinner and a message when 'loading.show' is true.
// The loading message is controlled by the 'loading' state retrived from the global state.

import { useGlobalState } from '../store'

const Loading = () => {
  const [loading] = useGlobalState('loading')

  // It return a modal overlay, the 'div' element covers the entire screen and centers its content vertically and horizontally
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen
      flex items-center justify-center bg-black 
      bg-opacity-50 transform transition-transform
      duration-300 ${loading.show ? 'scale-100' : 'scale-0'}`}
    >
      <div
        className="flex flex-col justify-center
        items-center bg-[#151c25] shadow-xl 
        shadow-[#e32970] rounded-xl 
        min-w-min px-10 pb-2"
      >
        <div className="flex flex-row justify-center items-center">
          <div className="lds-dual-ring scale-50"></div>
          <p className="text-lg text-white">Processing...</p>
        </div>
        <small className="text-white">{loading.msg}</small>
      </div>
    </div>
  )
}

export default Loading