import styled from 'styled-components';


export const ArticlesContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin-bottom: 20px;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
`;

export const ImageContainer = styled.div`
    width: 160px;
    height: 110px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen and ( max-width: 720px ) {
        order: 3;
    }
    @media screen and ( max-width: 800px ) {
        width: 150px;
        height: 120px;
    }
    @media screen and ( max-width: 500px ) {
        width: 110px;
        height: 70px;
    }
`;

export const TextsHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 25px;
    margin-right: 25px;
    @media screen and ( max-width: 720px ) {
        margin-right: 10px;
        margin-left: 0;
    }
`;

export const ArticleTitle = styled.h1`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;

export const SecondaryTitle = styled.h1`
    font-size: 13px;
    font-weight: 300;
    line-height: 15px;
    color: grey;
`;

export const AuthorInfo = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    margin-top: 8px;
`;

export const AuthorName = styled.span`
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 5px;
    @media screen and ( min-width: 1050px ) and ( max-width: 1065px ) {
        margin-right: 0px;
    }
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const AuthorLocation = styled.span`
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const PublishInfo = styled.div`
    width:  fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PublishDate = styled.span`
    font-size: 12px;
    color: #757575;
    margin-right: 5px;
`;

export const TimeOfReading = styled.span`
    font-size: 12px;
    color: #757575;
`;

export const ImgWrapper = styled.div`
    display: none;
    @media screen and ( max-width: 720px ) {
        display: block;
        order: 2;
    }

    img {
        width: 20px;
        height: 25px;
        margin-top: 77px;
        margin-right: 25px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const StarIcon = styled.div`
    margin-left: 5px;
    img {
        width: 13px;
        height: 13px;
    }
`;


