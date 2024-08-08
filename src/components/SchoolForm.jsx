"use client"

import { useFormStatus } from "react-dom";
import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import FormRowVertical from "./FormRowVertica";
import Link from "next/link";
import { addSchool } from "../app/actions";
// import { Link, useNavigate } from "react-router-dom";

export const Form = styled.form`
    padding: 2rem 3.5rem;

    /* Box */
    background-color: #18212f;
    border: 1px solid #1f2937;
    border-radius: 7px;

    overflow: hidden;
    font-size: 1.4rem;
    & a {
        text-decoration: none;
    }
`;
export const Input = styled.input`
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    padding: 0.8rem 1.2rem;
    box-shadow: var(--shadow-sm);
    color: white;
`;

export const sizes = {
    small: css`
        font-size: 1.2rem;
        padding: 0.4rem 0.8rem;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
    `,
    medium: css`
        font-size: 1.4rem;
        padding: 1.2rem 1.6rem;
        font-weight: 500;
    `,
    large: css`
        font-size: 1.6rem;
        padding: 1.2rem 2.4rem;
        font-weight: 500;
    `,
};

export const variations = {
    primary: css`
        color: var(--color-brand-50);
        background-color: var(--color-brand-600);

        &:hover {
            background-color: var(--color-brand-700);
        }
    `,
    secondary: css`
        color: var(--color-grey-600);
        background: var(--color-grey-0);
        border: 1px solid var(--color-grey-200);

        &:hover {
            background-color: var(--color-grey-50);
        }
    `,
    danger: css`
        color: var(--color-red-100);
        background-color: var(--color-red-700);

        &:hover {
            background-color: var(--color-red-800);
        }
    `,
};

const Div = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 595px) {
        flex-direction: column;
        gap: 0px;
    }
`;

export const Button = styled.button`
    border: none;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);

    ${(props) => sizes[props.size]}
    ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
    variation: "primary",
    size: "medium",
};

function Schoolform() {
    const {pending} = useFormStatus()


    return (
        <Form action={addSchool}>
            <FormRowVertical label="Name">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    // This makes this form better for password managers
                    required
                />
            </FormRowVertical>
            <FormRowVertical label="Address">
                <Input
                    type="text"
                    id="address"
                    name="address"
                    // This makes this form better for password managers
                    required
                    disabled={pending}
                />
            </FormRowVertical>
            <Div>
                <FormRowVertical label="City">
                    <Input
                        type="text"
                        id="city"
                        name="city"
                        // This makes this form better for password managers
                        required
                        disabled={pending}
                    />
                </FormRowVertical>
                <FormRowVertical label="State">
                    <Input
                        type="text"
                        id="State"
                        name="State"
                        // This makes this form better for password managers
                        required
                        disabled={pending}
                    />
                </FormRowVertical>
            </Div>
            <FormRowVertical label="Contant">
                <Input
                    type="number"
                    id="contant"
                    name="contant"
                    // This makes this form better for password managers
                    required
                    disabled={pending}
                />
            </FormRowVertical>
            <FormRowVertical label="Image url">
                <Input
                    type="text"
                    id="image"
                    name="image"
                    // This makes this form better for password managers
                    required
                    disabled={pending}
                />
            </FormRowVertical>
            <FormRowVertical label="Email address">
                <Input
                    type="email"
                    id="email"
                    name="email"
                    // This makes this form better for password managers
                    autoComplete="username"
                    required
                    disabled={pending}
                />
            </FormRowVertical>
            <FormRowVertical>
                <Button size="large" disabled={pending}>
                    Add school
                </Button>
            </FormRowVertical>
            {/* <Link to={"/signup"}>Signup</Link> */}
        </Form>
    );
}

export default Schoolform;
