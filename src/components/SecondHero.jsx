import first from './images/image1.png'
import second from './images/image2.png'
import third from './images/image3.png'
import fourth from './images/image4.png'


export default function SecondHero() {
    return(
        <div className='lg:m-0 ml-18 mt-20'>
            <img src={first} alt="" className='lg:absolute right-[25rem]' />
            <img src={second} alt="" className='lg:absolute lg:mt-[6rem]  right-[10rem]'/>
            <img src={third} alt="" className='lg:absolute lg:mt-[17rem]  right-[35rem]'/>
            <img src={fourth} alt="" className='lg:absolute lg:mt-[23rem] right-[3rem]' />
        </div>
    )
}