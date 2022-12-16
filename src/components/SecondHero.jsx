import first from './images/image1.png'
import second from './images/image2.png'
import third from './images/image3.png'
import fourth from './images/image4.png'


export default function SecondHero() {
    return(
        <div>
            <img src={first} alt="" className='hero-image1' />
            <img src={second} alt="" className='hero-image2'/>
            <img src={third} alt="" className='hero-image3'/>
            <img src={fourth} alt="" className='hero-image4' />
        </div>
    )
}