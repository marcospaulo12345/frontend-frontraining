import { getByText, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';

import { AuthProvider } from "../Context/authContext";

import CreateSolution from "../pages/CreateSolution/createSolution";

describe("Form submit Solution", () => {
    test("Deve mostrar todos os inputs na página", () => {
        render(
            <AuthProvider>
                <MemoryRouter>
                    <CreateSolution />
                </MemoryRouter>
            </AuthProvider>
        )
        expect(screen.getByText('Imagem*')).toBeInTheDocument();
        expect(screen.getByText('Título')).toBeInTheDocument();
        expect(screen.getByText('Link do Repositório')).toBeInTheDocument();
        expect(screen.getByText('Link do Site')).toBeInTheDocument();
    })
})