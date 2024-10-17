import { FormInputLabel, Input, Group } from './form-input-style';

const FormInput = ({label, ...rest}) => {
    return (
        <Group>
            <Input {...rest} />
            {label && <FormInputLabel shrink={rest.value.length}>{label}</FormInputLabel>}
        </Group>
           );
}

export default FormInput;