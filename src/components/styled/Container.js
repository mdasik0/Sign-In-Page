import styleComponent from "styled-components";

export const MainContainer = styleComponent.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  height: 100vh;
  @media (max-width: 600px){ 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  @media (min-width: 601px) and (max-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export const ImageContainer = styleComponent.div`

width: 100%;
  display: grid;
  place-items: center;
  height: 100%;
  padding: 1rem;
  flex: 1;

`;
export const InputContainer = styleComponent.div`
  flex: 1;
`;
export const LoginFormContainer = styleComponent.form`
padding: 20px;
width: 80%;
margin: 0px auto;

@media (max-width: 600px){ 
  padding: 0;
  margin: 0;
  width: 100%;
}
@media (min-width: 601px) and (max-width: 1200px) {
  padding: 0;
  margin: 0;
  width: 100%;
}
`;

export const InputBoxContainer = styleComponent.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

`;
export const Cp_RmContainer = styleComponent.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 10px;
    @media (max-width: 600px){ 
      flex-direction: column-reverse;
      gap: 5px;
    }
    @media (min-width: 601px) and (max-width: 1200px) {
      flex-direction: column-reverse;
      gap: 5px;
    }

`;

export const SocialContainer = styleComponent.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
`;

export const CheckBoxContainer = styleComponent.div`
    display: flex;
    align-items: center;
    gap: 3px;
    margin-bottom: 10px;
`;
export const PasswordContainer = styleComponent.div`
    position: relative;
`;
