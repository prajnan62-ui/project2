import './Component3.css'
import { FaPhone } from "react-icons/fa"; 
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
function Component3(){
    return(
        <>
        <div className="container">
            <div className="top">
                <div className="left">
                    <div className="content"><b>Get In Touch </b>
                    </div>
                    <div className="content1">we'd love to hear from you.Reach out with questions,feedback,or to book a service</div>
                    <div className="content2"><FaPhone />  9834556681 </div>
                    <div className="content2"><IoMail />  Vedhashree Professional Beauty Parlour and Makeup Studio.com </div>
                    <div className="content1"><IoLocation style color='rgb(224, 79, 128)' />   Bargi,Kumta</div>
                    <div className="content2"><FaInstagram />  @Vedashree Professional Beauty Parlour and Makeup Studio </div>
                    <div className="content2"><FaWhatsapp />  Chat on Whatsapp </div>
                    

                </div>
                <div className="right">
                     <div className="right1">
                        <div className="r1"><b><GoClockFill />   Parlour Timings</b></div>
                        <div className="r2"><b>Opening:</b>10:00AM</div>
                        <div className="r2"><b>Closeing:</b>8:00AM</div>
                    </div> 
                </div>
             </div>
             <div className="Bottom"></div>
        </div>
        </>
    )
}
export default Component3