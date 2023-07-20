import Button from "../Button/Button";
// Icons
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact__form}>
          <div className={styles.top__btns}>
            <Button text="Chat Support" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="Call Support" icon={<FaPhoneAlt fontSize="24px"/>}/>
          </div>
          <Button noBlack={true} text="Email Support" icon={<HiMail fontSize="24px"/>} />

          <form>
            <div className={styles.form__container}>
              <label htmlFor="name">Name</label>
              <input type="text" />  
            </div>

            <div className={styles.form__container}>
              <label htmlFor="email">Email</label>
              <input type="text" />  
            </div>

            <div className={styles.form__container}>
              <label htmlFor="text">Text</label>
              <textarea rows={10}/>  
            </div>

            <div className={styles.submit__btn}>
              <Button isShort={true} text="Submit"/>
            </div>
          </form>
        </div>
        
        <div className={styles.contact__image}>
            <img src="./images/contact.svg" alt="contact" />
          </div>
        
    </section>
  )
}

export default ContactForm
