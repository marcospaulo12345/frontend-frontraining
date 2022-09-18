import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import CardChallenger from "../components/CardChallenger/cardChallenger";
import CardSolution from "../components/CardSolution/cardSolution";

const challenge = {
    image: "uploads/Pedra Papel tesoura_desktop-step-1.jpg",
    title: "Teste",
    tools: "js,css,HTML",
    level: 1,
    description: "descrição"
}

const solution = {
    image: "uploads/solutions/14_47_calc.PNG",
    title: "teste",
    createdAt: "2022-09-14T13:43:20.000Z",
    updatedAt: "2022-09-14T13:43:20.000Z",
    site: "https://catherineisonline.github.io/pricing-component-with-toggle-frontendmentor/",
    repository: "https://github.com/catherineisonline/pricing-component-with-toggle-frontendmentor",
    challenge: challenge,
    user: {
        username: "Marcos",
        email: "marcos@gmail.com",
        score: 30
    }
}

describe("Card Component", () => {
    test("Deve mostra o titulo do desafio", () => {
        render(<CardChallenger challenge={challenge} />)

        const ifTitle = screen.getByText("Teste");

        expect(ifTitle).toBeInTheDocument();
    });

    test("Deve mostra a imagem do desafio", () => {
        render(<CardChallenger challenge={challenge} />)

        const ifImage = screen.getByAltText("Imagem Desafio");

        expect(ifImage).toBeInTheDocument();
    });

    test("Deve mostra as ferrementas do desafio", () => {
        render(<CardChallenger challenge={challenge} />)

        const iftools = screen.getByText("js");

        expect(iftools).toHaveAttribute("class", "html");
    });

    test("Deve mostra o nível do desafio", () => {
        render(<CardChallenger challenge={challenge} />)

        const ifLevel = screen.getByText("Fácil");

        expect(ifLevel).toBeInTheDocument();
    });

    test("Deve mostra a descrição do desafio", () => {
        render(<CardChallenger challenge={challenge} />)

        const ifLevel = screen.getByText("descrição");

        expect(ifLevel).toBeInTheDocument();
    });

    test("Teste o card de soluções", () => {
        render(
            <CardSolution solution={solution} />
        )

        expect(screen.getByText("teste")).toBeInTheDocument();
        expect(screen.getByAltText("Imagem da solução")).toBeInTheDocument();
        expect(screen.getByText("js")).toBeInTheDocument();
        expect(screen.getByText("Marcos")).toBeInTheDocument();
        expect(screen.getByText("marcos@gmail.com")).toBeInTheDocument();
        expect(screen.getByText("30")).toBeInTheDocument();
    })
})