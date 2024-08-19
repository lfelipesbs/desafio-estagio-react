import './Button.css'

const Button = ({ children, style, type, onClick, id, disabled, edit }) => (
    <>
        {!disabled && <button
            id={id}
            onClick={onClick}
            className={`btns ${style}`}
            type={type}
            style={edit}
        >
            {children}
        </button>}
    </>
)


export default Button;
