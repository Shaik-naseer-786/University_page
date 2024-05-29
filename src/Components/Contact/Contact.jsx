import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_KEY");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          dignissimos expedita odit perspiciatis. Neque, unde laudantium
          deserunt cum natus, quam maiores quas, temporibus delectus ratione
          corrupti accusamus quidem dolorem sit sequi dicta atque adipisci
          obcaecati dolor totam deleniti nesciunt quisquam. Beatae, nobis?
          Officiis libero provident reprehenderit culpa sit fuga est!
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />abc@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91737368317</li>
            <li><img src={location_icon} alt="" />vadodara Gujarat</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>

            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <label htmlFor="">Phone Number</label>
            <input type="text" name="phone" placeholder="Enter Your Mobile No" required />
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" id="" rows="6" placeholder="Enter Your Message......" required></textarea>
            <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
