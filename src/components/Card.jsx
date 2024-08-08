/* eslint-disable @next/next/no-img-element */
'use client'
import styled from 'styled-components'
import { Button } from './SchoolForm';

const StyledCard = styled.div`
    width: 400px;
   overflow: hidden;
    background-color: #18212f;
    border: 1px solid #1f2937;
    border-radius: 7px;

    & img{
        width: 100%;
        height: 250px;
    }
`;

const ApplyButton = styled(Button)`
margin: 10px 40px;
grid-column: 1 / 3;
`
const Div = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 10px;
    padding: 10px 20px;
    color: white;
`

function Card({school}) {
    
    function imgError2(e){
        'use client'
        e.preventDefault();
        e.target.src = "/default.png"
    }
    return (
        <StyledCard>
            <img src={school.image} alt={school.name} onError ={imgError2}/>
            <Div>
                <h3>{school.name}</h3>
                <h4>P.No: {school.contact}</h4>
                <h5>{school.address}</h5>
                <h5>Email: {school.email_id}</h5>
            <ApplyButton size='small'>Apply</ApplyButton>
            </Div>
        </StyledCard>
    )
}

export default Card
