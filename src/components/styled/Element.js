import styleComponent from "styled-components"

export const Heading = styleComponent.h2`
    text-align: center;
    margin: 0;
`;
export const Label = styleComponent.label`
    font-size: small;
    font-weight: 600;
    margin-bottom: 5px;
`;
export const Input = styleComponent.input`
    width: 100%;
    padding:10px 0px 10px 10px;
    border: 1px solid gray;
    border-radius: 5px;
`;
export const Image = styleComponent.img`
@media (max-width: 600px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
@media (min-width: 601px) and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
export const InputCheckbox = styleComponent.input`

`;
export const CheckboxText = styleComponent.span`
    font-weight: 600;
    font-size: small;
    color: gray;
`;
export const LinkTag = styleComponent.a`
    color: rgb(0, 102, 255);
    transition: all 0.3s;
    font-size:small;
    &:hover {
        color: #FFB201;
    }
`;
export const LoginButton = styleComponent.button`
    background-color: #FFB201;
    font-weight: 600;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: all 0.5s;
    width: 100%;
    margin: 10px auto;
    &:hover {
        background-color: orangered;
    }
    &:active {
        background-color: rgb(235, 235, 235);
    }
`;
export const SignUp = styleComponent.div`
    text-align: center;
    font-size: small;
    font-weight: 500 ;
    margin-top: 10px;
`;
export const Or = styleComponent.div`
    margin: 30px 10px auto;
    text-align: center;
`;
export const HorizontalLine = styleComponent.hr`
    
`;

