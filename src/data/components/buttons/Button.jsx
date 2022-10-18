import "./button.css";
const Button = ({ className, handleClick, title }) => {
  return (
    <div class="button-container">
      <button className={className} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
