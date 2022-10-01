import { getByText, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Profile from "../pages/Profile/index";
import { MemoryRouter } from 'react-router-dom';
import React from "react";

import { rest } from 'msw';
import {setupServer} from 'msw/node'

import { AuthProvider } from "../Context/authContext";    

describe("Modal2 Component", () => {
    beforeEach(() => {
        jest.mock("../__mocks__/testeChallenger")
    })
    test("Deve mostar o modal de confirmação", async () => {

        const { findByTestId } = render(
            <AuthProvider>
                <MemoryRouter>
                    <Profile />
                </MemoryRouter>
            </AuthProvider>
        );
        // await waitFor(() => expect(findByTestId("test-items")).toBeInTheDocument())
        const followerDivElement = await screen.findByTestId(`test-items-0`)
        expect(followerDivElement).toBeInTheDocument();
    })
})