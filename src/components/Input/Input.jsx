import inputStyles from "./Input.styles";

const Input = ({ text, onChange, type, error, checkbox }) => (
    <label>
        {text}
        <input onChange={onChange} type={type} />
        {error && <p style={inputStyles.error}>{error}</p>}
    </label>
)

export default Input;
