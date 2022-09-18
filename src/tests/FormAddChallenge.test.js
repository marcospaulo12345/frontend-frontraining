import { getByText, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { MemoryRouter } from 'react-router-dom';

import { AuthProvider } from "../Context/authContext";

import CreateChallege from '../pages/CreateChallenge/createChallenge';

describe("Form Challenge", () => {
    test("Deve mostrar todos os inputs", () => {
        render(
            <AuthProvider>
                <MemoryRouter>
                    <CreateChallege />
                </MemoryRouter>
            </AuthProvider>
        )
        expect(screen.getByText('Imagem*')).toBeInTheDocument();
        expect(screen.getByText('Título')).toBeInTheDocument();
        expect(screen.getByText('Descrição')).toBeInTheDocument();
        expect(screen.getByText('Cores')).toBeInTheDocument();
        expect(screen.getByText('Nível')).toBeInTheDocument();
        expect(screen.getByText('Fontes')).toBeInTheDocument();
        expect(screen.getByText('Ferramentas')).toBeInTheDocument();
        expect(screen.getByText('Assets')).toBeInTheDocument();
    })
})