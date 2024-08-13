import './Button.css'

const Button = ({ children, style, type, onClick, id }) => {
    return(
        <>
            <button
                id={id}
                onClick={onClick}
                className={`btns ${style}`}
                type={type}
            >
                {children}
            </button>
        </>
    )
}

export default Button;
