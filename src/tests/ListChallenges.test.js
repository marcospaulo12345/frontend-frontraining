import { getByText, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Challenges from '../pages/Challenges/challenges';
import { MemoryRouter } from 'react-router-dom';
import React from "react";

import { rest } from 'msw';
import {setupServer} from 'msw/node'

import { AuthProvider } from "../Context/authContext";    

describe("List Challenges", () => {
    beforeEach(() => {
        jest.mock("../__mocks__/testChallengesPagination")
    })
    test("Deve mostrar os desafios cadastrados", async () => {

        const { findByTestId } = render(
            <AuthProvider>
                <MemoryRouter>
                    <Challenges />
                </MemoryRouter>
            </AuthProvider>
        );
        // await waitFor(() => expect(findByTestId("test-items")).toBeInTheDocument())
        const followerDivElement = await screen.findByTestId(`test-items-0`)
        expect(followerDivElement).toBeInTheDocument();
    })
})