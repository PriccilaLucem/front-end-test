import React from 'react';
import StyledForm from '../styles/styledForm';

type FormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children?: React.ReactNode;
};

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
    return (
        <StyledForm onSubmit={onSubmit}>
            {children}
        </StyledForm>
    );
}

export default Form;
