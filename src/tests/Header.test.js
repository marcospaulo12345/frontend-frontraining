import { getByText, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { MemoryRouter } from 'react-router-dom';

import { AuthProvider } from "../Context/authContext";
import NavBar from '../components/NavBar/navBar';

describe("Header Component", () => {
    test("Deve mostrar a logo do site", () => {
        render(
            <AuthProvider>
                <MemoryRouter>
                    <NavBar isHome={true} />
                </MemoryRouter>
            </AuthProvider>
        )

        const ifLogo = screen.getByAltText("Logo");

        expect(ifLogo).toBeInTheDocument();
    });

    test("Deve mostrar menu de links", () => {
        render(
            <AuthProvider>
                <MemoryRouter>
                    <NavBar isHome={true} />
                </MemoryRouter>
            </AuthProvider>
        )

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Desafios")).toBeInTheDocument();
        expect(screen.getByText("Soluções")).toBeInTheDocument();
    })
    // beforeEach(() => {
    //     jest.mock("../__mocks__/testUser")
    // })
    // test("Deve mostrar menu ao clicar no icone de usuário", async () => {
    //     render(
    //         <AuthProvider>
    //             <MemoryRouter>
    //                 <NavBar isHome={true} />
    //             </MemoryRouter>
    //         </AuthProvider>
    //     )
    //     screen.debug()
    //     // const productContainer = screen.getBy("btn-login");
    //     const itemMenu = await screen.findByText('Perfil')

    //     // userEvent.hover(productContainer);
    //     expect(itemMenu).toBeInTheDocument();
    // })
})