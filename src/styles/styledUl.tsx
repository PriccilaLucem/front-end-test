import styled from "styled-components";

const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-around;
    li{
        border: solid black 1px;
        border-radius: 10px;
        list-style-type: none;
        padding: 1%;
        background-color: #e9b793;
        div{

            margin-top:10px;
        }
    }
`


export default Ul;