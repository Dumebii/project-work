import Vector from './images/Vector.png'

export default function FirstHero() {
    return (
    <div className="ml-10">
      <h1 className="text-white">
        Welcome to the <br />
        Future of Landings
      </h1>
      <p className="text-white">
        Create screens right in your figma. Connect blocks, create <br /> awesome landings. Yes, it just takes a few minutes. 
      </p>
      <button className="text-white bg-blue-800 flex p-2">
        <img src={Vector} className='h-5 pl-1 pr-1' /> Download UI kit
      </button>
    </div>
    )
}