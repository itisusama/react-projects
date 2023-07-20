import styles from "./Button.module.css";

const Button = (props) => {
  
  const { icon, text, noBlack, isShort } = props;
  
  return (
    <button className={noBlack ? styles.outline__btn : isShort ? styles.short__btn : styles.primary__btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
