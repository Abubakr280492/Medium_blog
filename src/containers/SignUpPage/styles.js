import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledSignUpPage = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-color: #EFF0F0;
`;

export const FormStyled = styled.form`
    width: 100%;
    margin-top: 30px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 350px;
    height: 40px;
    border: 1px solid #CCCCCC;
    margin-top: 12px;
    margin-bottom: 12px;

    &::placeholder {
        font-size: 14px;
        color: #CCCCCC;
        font-weight: 400;
        line-height: normal;
        text-indent: 10px;
    }
    &:hover {
        border-color: #CCCCCC;
        cursor: pointer;
    }
`;

// export const ErrorStyle = css`
// 	width: 350px;
//     height: 40px;
//     border: 1px solid red;
//     margin-top: 12px;
//     margin-bottom: 12px;

//     &::placeholder {
//         font-size: 14px;
//         color: red;
//         font-weight: 400;
//         line-height: normal;
//         text-indent: 10px;
//     }
//     &:hover {
//         border-color: #CCCCCC;
//         cursor: pointer;
//     }
// `;

export const TextWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

export const Title = styled.span`
    font-size: 15px;
    font-weight: 400;
    padding-left: 10px;
    color: grey;
    span {
        color: #77D89E;
        font-weight: 500;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const SignInLink = styled(Link)`
    color: #77D89E;
    font-weight: 500;
    margin-left: 5px;
    &:hover {
        cursor: pointer;
        text-decoration: none;
        color: #77D89E;
    }
`;

export const Heading = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    @media screen and ( max-width: 710px ) {
        font-size: 20px;
        line-height: 30px;
    }
`;

export const CheckboxContainer = styled.div`
    width: 350px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    font-size: 14px;
    margin-left: 5px;
    line-height: 18px;
    margin-top: -5px;
`;

export const PrivacyLink = styled(Link)`
    font-size: 16px;
    font-weight: 400;
    color: grey;
    margin-top: 50px;
    &:hover {
        cursor: pointer;
        text-decoration: none;
        color: #77D89E;
    }
`;

export const ErrorMessage = styled.div`
	width: 350px;
	font-size: 14px;
	line-height: 20px;
	color: red;
	text-align: left;
`;
