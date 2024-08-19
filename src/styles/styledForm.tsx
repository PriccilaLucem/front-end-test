import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    border: 1px solid black;
    background-color: aliceblue;
    input{
        margin: 20px;
        border-radius: 1rem;
        width: 200px;
        height: 20px;
    }
    button{
        background-color: red;
        width: 100px;
        height: 20px;
        border-radius: 10px;
        margin-bottom: 10px;
    }
` 

export default StyledForm;