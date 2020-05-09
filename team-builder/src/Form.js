import React, {useState} from "react";
import styled from "styled-components";

const borderRadius = "4px";
const padding = "4px";
const bgColor = "#C8C6AF";
const FlexForm = styled.form`
    border: 1px solid black;
    background-color: ${bgColor};
    border-radius: ${borderRadius};
    padding: ${padding};
    display: flex;
    flex-direction: column;
    width: 33%;
    min-width: 250px;
`;
const FormContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
`;

export default function Form(props) {
    const [formData, setFormData] = useState({
        id: Date.now(),
        name: "",
        email: "",
        role: ""
    });

    const clearForm = () => {
        setFormData({
            id: Date.now(),
            name: "",
            email: "",
            role: "",
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(formData);
        clearForm();
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }


    return (
        <FormContainer className="formContainer">
            <FlexForm onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    id={"name"}
                    type={"text"}
                    name={"name"}
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email: </label>
                <input
                    id={"email"}
                    type={"text"}
                    name={"email"}
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="role">Role: </label>
                <input
                    id={"role"}
                    type={"text"}
                    name={"role"}
                    value={formData.role}
                    onChange={handleChange}
                />
                <button type={"submit"}>Clicky to Submitty</button>
            </FlexForm>
        </FormContainer>
    );
}

/*
const NoteForm = props => {
  return (
      <input
        id="email"
        type="text"
        name="email"
        placeholder="Please Enter Your Email:"
      />
      <button type="submit">Click To Submit!</button>
    </form>
  );
};
 */