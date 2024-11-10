import styled from 'styled-components'

export const LoginBackgroundContainer = styled.div`
    height: 100vh;
    background-color: ${props => (props.isDarkMode ? '#313131' : 'white')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px){
        align-items: center;
    }
`
export const LoginBox = styled.form`
    background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f1f5f9')};
    border-radius: 10px;
    font-family: "Roboto";
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    margin: 20px;
    @media (min-width: 768px){
        width: 45%;
        padding: 30px;
    }
    @media (min-width: 992px){
        width: 40%;
        padding: 40px;
    }
`
export const LoginImage = styled.img`
    height: 30px;
    margin-top: 15px;
    margin-bottom: 15px;
    @media (min-width: 768px){
        height: 50px;
    }
`
export const LoginInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`
export const LabelElement = styled.label`
    color: ${props => (props.isDarkMode ? 'white' : '#475569')};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
`
export const LoginInputElement = styled.input`
    width: 100%;
    border: 2px solid grey;
    border-radius: 3px;
    padding: 10px;
    font-size: 18px;
    color: ${props => (props.isDarkMode ? 'white' : 'black')};
    cursor: pointer;
    background-color: ${props => (props.isDarkMode ? 'transparent' : 'white')};
`
export const ShowPasswordInputContainer = styled.div`
    display: flex;
    align-self: flex-start;
    margin-top: 10px;
    align-items: center;
`
export const CheckBoxInput = styled.input`
    height: 20px;
    width: 20px;
    cursor: pointer;
`
export const ShowPasswordLabel = styled.label`
    color: ${props => (props.isDarkMode ? 'white' : 'black')};
    font-size: 16px;
    font-weight: 500;
    margin-left: 2px;
    cursor: pointer;
`
export const LoginButton = styled.button`
    background-color: #3b82f6;
    font-weight: bold;
    color: #ffffff;
    font-size: 18px;
    padding: 10px;
    border-style: none;
    cursor: pointer;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 5px;
    border-radius: 8px;
`
export const LoginErrorMessagePara = styled.p`
    color: red;
    font-weight:500;
    font-size: 16px;
    margin: 0px;
    align-self: flex-start;
`
