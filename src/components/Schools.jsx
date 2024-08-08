'use client';
import styled from "styled-components"
import Card from './Card'
import Link from "next/link";
const StyledSchools = styled.main`
    display: flex ;
    justify-content: center;
    margin: auto;
    padding: 10px;
    padding-top: 70px;
    flex-wrap: wrap;
    flex-shrink: 0;
    gap:40px;
    max-width: 1300px;
    position: relative;
`
const NavLink = styled(Link)`
    position: absolute;
    left: 5%;
    top: 1%;
    text-decoration: none;
    background-color: #6500eb;
    padding: 10px;
    color: white;
    border-radius: 8px;
`;
 function Schools({data}) {
    
    return (
        <StyledSchools>
            <NavLink href={'/addschool'}>Add New School</NavLink>
            {data.map((da)=><Card key={da.id} school={da}/>)}
        </StyledSchools>
    )
}

export default Schools
