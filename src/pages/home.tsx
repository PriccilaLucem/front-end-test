import React, { useState } from 'react';
import * as yup from 'yup';
import Form from "../components/form";
import { useNavigate } from 'react-router-dom';

const formSchema = yup.object().shape({
    hostname: yup.string().required('Hostname is required'),
    players: yup
        .number()
        .min(1, 'Number of players must be at least 1')
        .required('Number of players is required'),
    map: yup.string().required('Map is required'),
    mode: yup.string().required('Mode is required'),
});

const Home: React.FC = () => {
    const [formData, setFormData] = useState({
        hostname: '',
        players: '',
        map: '',
        mode: '',
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await formSchema.validate(formData, { abortEarly: false });
             console.log('Valid data:', formData);
            setErrors({});
            navigate("/view")
        } catch (err) {
            const validationErrors: { [key: string]: string } = {};
            if (err instanceof yup.ValidationError) {
                err.inner.forEach((error) => {
                    if (error.path) {
                        validationErrors[error.path] = error.message;
                    }
                });
                setErrors(validationErrors);
            }
        }
    };

    return (
        <>  
            <header>
                <h1>Create your game section</h1>
            </header>
            <Form onSubmit={handleSubmit}>
                <input
                    placeholder="hostname"
                    type="text"
                    name="hostname"
                    value={formData.hostname}
                    onChange={handleChange}
                />
                {errors.hostname && <p>{errors.hostname}</p>}

                <input
                    placeholder="players"
                    type="number"
                    name="players"
                    value={formData.players}
                    onChange={handleChange}
                    min={1}
                />
                {errors.players && <p>{errors.players}</p>}

                <input
                    placeholder="map"
                    type="text"
                    name="map"
                    value={formData.map}
                    onChange={handleChange}
                />
                {errors.map && <p>{errors.map}</p>}

                <input
                    placeholder="mode"
                    type="text"
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                />
                {errors.mode && <p>{errors.mode}</p>}

                <button type="submit">Create Game</button>
            </Form>
        </>
    );
};

export default Home;
