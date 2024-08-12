import Button from '../Button/Button';

import './Form.css';
import formStyles from './Form.styles';

function Form({ inputs, style, onSubmit, type }){
    return (
        <form onSubmit={onSubmit} className={style}>
            {inputs.map(({ text, onChange, type, error, value }) => (
                <label>
                    {text}
                    <input onChange={onChange} type={type} value={value} />
                    {error && <text style={formStyles.error}>{error}</text>}
                </label>
            ))}
            {/* eslint-disable-next-line react/style-prop-object */}
            <Button type='submit' style="first">
                {type}
            </Button>
        </form>
    )
}

export default Form;
