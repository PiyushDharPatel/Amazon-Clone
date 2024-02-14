
const Card = ({imgs,link}) => {
  return (
    <div className='bg-white z-30 m-3 rounded-xl'>
    <div className="text-xl xl:text-2xl font-bold text-black ml-3 mt-5">{link}</div>
    <div className="grid grid-cols-2 xl:grid-cols-2 h-[460px]">
     {
     imgs.map((img) => (
        <div className="m-3 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
        <img
          className="h-[100%] rounded-xl w-[100%] object-cover"
          src={img}
          alt="Home card"
        />
       
      </div>
      ))}   
    
    
  </div>
  </div>
  )
}

export default Card
