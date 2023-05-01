import React from 'react'
import { useState } from 'react';

function Form2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [formValues, setFormValues] = useState({});
    const [show, setShow] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValues({
            name,
            email,
            password,
            phone,
        });
    };
    const showPass = () => {
        setShow(true);
    };
    const hidePass = () => {
        setShow(false);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        pattern="^[a-zA-Z]+$"
                        required
                        title="Name should have alphabet only"
                        minLength={"2"}
                        maxLength={"50"}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[@_.&#])[^\s]{8,}$"
                        required
                        title="Password should contain at least one lowercase letter, one uppercase letter, and one special character (@, _, ., &, or #) and minimum of 8 length"
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        pattern="^\d{10}$"
                        title="Phone number should have only digits of length 10"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>

            {Object.keys(formValues).length > 0 && (
                <div>
                    <h2>Form values:</h2>
                    <ul>
                        <li>Name: {formValues.name}</li>
                        <li>Email: {formValues.email}</li>
                        <li>
                            Password:{" "}
                            <span className={show ? "visible" : "invisible"}>
                                {formValues.password}
                            </span>
                        </li>
                        <li>Phone: {formValues.phone}</li>
                    </ul>
                    <button onClick={showPass}>Show Password</button>
                    <button onClick={hidePass}>Hide Password</button>
                </div>
            )}
        </div>
    )
}

export default Form2
