"use client";

import styled from "styled-components";
import Schoolform from "../../components/SchoolForm";
import Link from "next/link";

const LoginLayout = styled.main`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
    color: white;
`;
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

function Page() {
    return (
        <LoginLayout>
            <NavLink href={'/'}>Schools</NavLink>
            <Schoolform />
        </LoginLayout>
    );
}

export default Page;
