
const TeamCard = ({ name, title, img, link }) => (

  <div className="flex flex-col items-center justify-center pb-10 bg-black-gradient-2 mr-10 w-[16rem] h-[20rem] max-w-sm bg-gray-700 bg-opacity-90 border border-gray rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img src={img} alt={name} className="w-[8rem] h-[8rem] rounded-full w-24 h-24 mt-6 mb-6 rounded-full shadow-lg" />
  <div className="flex flex-col ml-4 items-center">
    <h4 className="font-poppins font-semibold text-gray-900 text-[20px] leading-[32px]">
      {name}
    </h4>
    <p className="font-poppins font-normal text-[16px] leading-[24px] text-gray-400 mt-2 mb-4">
      {title}
    </p>
    <a href={link} className="inline-flex justify-center items-center py-2 text-sm w-[8rem] font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Know more</a>
  </div>
</div>

)

export default TeamCard;