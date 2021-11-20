import React,{useRef, useState} from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import './contact.css'
function Contact() {
    const form = useRef();
    const [details, setDetails] = useState({name:'',user_email:'', message:''})
    // const sendEmail =  (e) =>{
    //     e.preventDefault();
    //     emailjs.sendForm('service_zb6ub7d','template_ndbfx2q',e.target.name,'user_h9WLJluUgaBJ2Bg5meSHi').then(res=>{
    //         console.log(res);
    //     }).catch(err=>console.log(err));
    //     console.log('hello');

       
    // }
    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setDetails({...details, [name]:value})
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zb6ub7d', 'template_ndbfx2q', e.target, 'user_h9WLJluUgaBJ2Bg5meSHi')
          .then((result) => {
              console.log(result.text);
              e.target ='';
          }, (error) => {
              console.log(error.text);
          })
          setDetails({name:"",user_email:"",message:""});
      };




    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
            </div>
            <div className="container">
                <div className="contactinfo">
                    <div className="box">
                        <div className="icon">
                            <span><i class="fas fa-map-marker-alt"></i></span>
                        </div>
                        <div className="text">
                            <h6>Address</h6>
                            <p>No 64 "Sanasa Buliding",<br/> Dewalapola junction,<br/> Dewalapola,<br/> SriLanka,</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                        <i class="fas fa-phone-alt"></i>
                        </div>
                        <div className="text">
                            <h6>Phone</h6>
                            <p>076-931-1939</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                        <i class="fas fa-at"></i>
                        </div>
                        <div className="text">
                            <h6>Email</h6>
                            <p>flashmobiledewalapola@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form action="" ref={form} onSubmit={sendEmail}>
                        <h4>Send Message</h4>
                        <div className="inputBox">
                        <span>Name</span>
                            <input type="text" name='name'  value={details.name} required="required" onChange={onChangeInput}  />
                            
                        </div>
                        <div className="inputBox">
                        <span>Your Email</span>
                            <input type="text" name='user_email' value={details.user_email}   required="required" onChange={onChangeInput} />
                            
                        </div>
                        <div className="inputBox">
                            <span>Message</span>
                            <textarea name="message"  cols="30"  rows="8" value={details.message}  onChange={onChangeInput} ></textarea>
                            
                        </div>
                        <div className="inputBox">
                            <input type="submit"  value='Send'/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
