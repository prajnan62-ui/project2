import './Component2.css'
import bride from '../assets/bride.jpg'
import bride1 from '../assets/bride1.jpg'
import bride3 from '../assets/bride3.jpg'
import bride4 from '../assets/bride4.jpg'
import bride5 from '../assets/bride5.jpg'
import bride6 from '../assets/bride6.jpg'
import bride7 from '../assets/bride7.jpg'
import bride8 from '../assets/bride8.jpg'
import bride9 from '../assets/bride9.jpg'
import mehandi1 from '../assets/mehandi1.jpg'
import skin from '../assets/skin.jpg'
import bb from '../assets/bb.jpg'
import bbb from '../assets/bbb.jpg'
function Component2(){
    return(
        <>
        <div className="container">
        <div className="top">
          <div className="t1" ><b>Our Gallery</b></div>  
          <div className="t2">A showcase of our finest work and transformations. Get inspired for your next visit!</div>
          <div className="t3">
               <div className="all">all</div>
            <div className="Bridal">Bridal</div>
            <div className="Bridal">Hair</div>
            <div className="Bridal">skin care</div>
            <div className="Bridal">make up</div>
            <div className="Bridal">mehandi</div>
            <div className="Bridal">threading</div>
           </div>
        </div>
        
        <div className="bottom">
            <div className='image'>
                <div className="i">
                    <img src={bride} alt="bride"></img>
                </div>
                <div className="i"><img src={bride1} alt="bride"></img></div>
                <div className="i"><img src={bride6} alt="bride"></img></div>
                <div className="i"><img src={bride3} alt="bride3"></img></div>
            
            </div>
            <div className='image'>
                <div className="i"><img src={bride4} alt="bride4"></img></div>
                <div className="i"><img src={bride5} alt="bride5"></img></div>
                <div className="i"><img src={bride7} alt="bride6"></img></div>
                <div className="i"><img src={bride8} alt="bride7"></img></div>
            
            </div>
            <div className='image'>
                <div className="i"><img src={bride9} alt="bride8"></img></div>
                <div className="i"><img src={mehandi1} alt="bride9"></img></div>
                  <div className="i"><img src={skin} alt="bride9"></img></div>
                 <div className="i"><img src={bb} alt="bride9"></img></div>

            </div>
            <div className='image'>
                <div className="i"><img src={bbb} alt="bride8"></img></div>
                

            </div>
        </div>
    </div>
    </>
    )
}
export default Component2
            