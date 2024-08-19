import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';

import TextArea from '../TextArea/TextArea';

const TextAreaField = ({ name, control, onChange, ...props }) => {
	const { field } = useController({
		name,
		control,
		defaultValue: null
	});

	const onChangeText = useCallback(text => {
		field.onChange(text || null);
		onChange && onChange(text);
	}, [field, onChange]);

	return (
		<TextArea
			value={field.value}
			onChange={onChangeText}
			{...props}
		/>
	);
};

export default TextAreaField;
