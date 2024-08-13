import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';

import Input from '../Input/Input';

const InputField = ({ name, control, onChangeText, ...props }) => {
	const { field } = useController({
		name,
		control,
		defaultValue: null
	});

	const onChange = useCallback(text => {
		field.onChange(text || null);
		onChangeText && onChangeText(text);
	}, [field, onChangeText]);

	return (
		<Input
			value={field.value}
			onChange={onChange}
			{...props}
		/>
	);
};

export default InputField;
