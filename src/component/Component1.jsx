import './Component1.css'

// import { FaStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import profile from '../assets/profile.png'

function Component1(){
    return(
        <>
        <div className="container">
        
            <div className="header"><b>What Clients Say!</b></div>
            <div className="top"></div>
            <div className="middle"> subscribe to GlowNest YouTube Channel to watch more vedios.</div>
            <div className="bottom">
                
                <div className="b1">
                    <div className="box">
                        <img src={profile} alt="pp"></img>
                    </div>
                    <div className="a">"</div>
                    <div className="b">Absoultely loved my experience My hair has never looked better. </div>
                    <div className="c">Sarah L.</div>
                    <div className="d">
                       <FaStar color="gold" size={15}/>
                       <FaStar color="gold" size={15}/>
                       <FaStar color="gold" size={15}/>
                       <FaStar color="gold" size={15}/>
                       <FaStar color="gold" size={15}/>
                    </div>
                </div>                                                              
                <div className="b2">
                   <div className="box2">
                    <img src={profile} alt="pp"></img>
                   </div>
                    <div className="a">"</div>
                    <div className="b">The most relaxing facial ever. My skin is glowing</div>
                    <div className="c">Jessica M</div>
                    <div className="d">
                          <FaStar color="gold" size={15}/>
                          <FaStar color="gold" size={15}/>
                          <FaStar color="gold" size={15}/>
                          <FaStar color="gold" size={15}/>
                          <FaStar color="gold" size={15}/>
                    </div>

                </div>
                <div className="b3">
                    <div className="box3">
                        <img src={profile} alt="pp"></img>
                    </div>
                    <div className="a">"</div>
                    <div className="b">Friendly staff and amazing service. Highly recommend!</div>
                    <div className="c">Emily R.</div>
                    <div className="d">
                         <FaStar color="gold" size={15}/>
                         <FaStar color="gold" size={15}/>
                         <FaStar color="gold" size={15}/>
                         <FaStar color="gold" size={15}/>
                         <FaStar color="gold" size={15}/>
                    </div>
                </div>
                <div className="b4">
                    <div className="box4">
                        <img src={profile} alt="pp"></img>
                    </div>
                    <div className="a">"</div>
                    <div className="b">I felt truly pampered from start to finish</div>
                    <div className="c">Anna K.</div>
                    <div className="d">
                          <FaStar color="gold" size={15}/>
                          <FaStar color="gold" size={15}/>
                          <FaStar color="gold" size={15}/>
                          <FaStar color="gold" size={15}/>
                          <FaStar color="gold" size={15}/>
                    </div>
                </div>
            
            </div>
        </div>
        </>
    )
}
export default Component1