import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import loginImg from "../../assets/login_img_2.png";
import { useState } from "react";
import {
  MainContainer,
  ImageContainer,
  InputContainer,
  LoginFormContainer,
  SocialContainer,
  InputBoxContainer,
  Cp_RmContainer,
  CheckBoxContainer,
  PasswordContainer,
} from "../styled/Container";
import {
  Heading,
  Image,
  Label,
  Input,
  InputCheckbox,
  CheckboxText,
  LinkTag,
  LoginButton,
  SignUp,
  HorizontalLine,
  Or,
} from "../styled/Element";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <MainContainer>
      <ImageContainer>
        <Image src={loginImg} alt="login side image" />
      </ImageContainer>
      <InputContainer >
        <Heading>Login</Heading>
        <LoginFormContainer>
          <InputBoxContainer>
            <Label htmlFor="loginId">Login ID</Label>
            <Input
              name="loginId"
              type="text"
              placeholder="Enter your Login Id"
            />
          </InputBoxContainer>
          <InputBoxContainer>
            <Label htmlFor="Password">Password</Label>
            <PasswordContainer>
              <Input
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter your Password"
              />
              {show ? (
                <AiFillEye
                  onClick={() => setShow(false)}
                  title="hide password"
                  className="show"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => setShow(true)}
                  title="show password"
                  className="not_show"
                />
              )}
            </PasswordContainer>
          </InputBoxContainer>
          <Cp_RmContainer>
            <CheckBoxContainer>
              <InputCheckbox type="checkbox" name="remember" id="" />
              <CheckboxText>Remember me</CheckboxText>
            </CheckBoxContainer>
            <LinkTag href="">Change Password</LinkTag>
          </Cp_RmContainer>
          <CheckBoxContainer>
            <InputCheckbox type="checkbox" name="remember" id="" />
            <CheckboxText>
              Agree to{" "}
              <LinkTag href="">
                Terms & Conditions
              </LinkTag>{" "}
            </CheckboxText>
          </CheckBoxContainer>
          <LoginButton type="submit">Login</LoginButton>
        </LoginFormContainer>
        <HorizontalLine />
        <SignUp>
          Don&apos;t have an account?{" "}
          <LinkTag href="">
            Register Here
          </LinkTag>
        </SignUp>
        <Or>or</Or>
        <SocialContainer>
          <FcGoogle className="icon_size" />
          <FaFacebookSquare className="icon_size" />
        </SocialContainer>
      </InputContainer>
    </MainContainer>
  );
};

export default Login;
