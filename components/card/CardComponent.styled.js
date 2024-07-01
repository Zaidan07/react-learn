import styled from "styled-components";

export const Card = styled.div`
height: 280x;
width: 280px;
gap: 10px;
background-color: grey;
flex-direction: column;
align-items: center;
justify-content: center;
display: flex;
border-radius: 10px;
box-sizing: border-box;
`
export const Image = styled.img`
height: auto;
width: 100%;
max-width: 200px;
object-fit: contain;
`

export const Text = styled.p`
font-size: small;
font-family: sans-serif;
z-index: 0;
`