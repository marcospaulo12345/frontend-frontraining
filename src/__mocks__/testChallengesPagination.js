const challenges = {
    data: {
        challenges: { 
                rows: [
                    {
                        "id_challenge": 35,
                        "title": "Pedra Papel tesoura",
                        "description": "Este pequeno aplicativo é perfeito para quem está começando a se familiarizar com o JavaScript. A funcionalidade da calculadora será um bom teste!\r\n \r\n Seu desafio é construir este componente e fazê-lo parecer o mais próximo possível do design.\r\n \r\n Você pode usar qualquer ferramenta que desejar para ajudá-lo a completar o desafio. Então, se você tem algo que gostaria de praticar, sinta-se à vontade para tentar.\r\n \r\n Seus usuários devem ser capazes de:\r\n \r\n Veja o layout ideal dependendo do tamanho da tela do dispositivo\r\n Veja os estados de foco e foco para elementos interativos\r\n \r\n ",
                        "level": "1",
                        "image": "uploads/Pedra Papel tesoura_desktop-step-1.jpg",
                        "tools": "JavaScript,HTML,CSS",
                        "assets": "https://drive.google.com/drive/folders/1SJnAOp7PdSslDzIyCNCCDplI3a71Vjk9?usp=sharing",
                        "colors": "#dce775,#697689",
                        "fonts": "Aboreto",
                        "userId": 14,
                        "createdAt": "2022-09-05T23:11:13.000Z",
                        "updatedAt": "2022-09-05T23:11:13.000Z",
                        "user": {
                            "username": "Marcos",
                            "email": "marcos@gmail.com",
                            "score": 30
                        }
                    },
                    {
                        "id_challenge": 39,
                        "title": "Página de dashboard 2",
                        "description": "Este pequeno aplicativo é perfeito para quem está começando a se familiarizar com o JavaScript. A funcionalidade da calculadora será um bom teste!\r\n  \r\n  Seu desafio é construir este componente e fazê-lo parecer o mais próximo possível do design.\r\n  \r\n  Você pode usar qualquer ferramenta que desejar para ajudá-lo a completar o desafio. Então, se você tem algo que gostaria de praticar, sinta-se à vontade para tentar.\r\n  \r\n  Seus usuários devem ser capazes de:\r\n  \r\n  Veja o layout ideal dependendo do tamanho da tela do dispositivo\r\n  Veja os estados de foco e foco para elementos interativos\r\n  \r\n  ",
                        "level": "3",
                        "image": "uploads/Página de dashboard 2_graficos.jpg",
                        "tools": "CSS,HTML,JavaScript",
                        "assets": "https://drive.google.com/drive/folders/1SJnAOp7PdSslDzIyCNCCDplI3a71Vjk9?usp=sharing",
                        "colors": "#f47373,#697689",
                        "fonts": "Acme,Actor",
                        "userId": 14,
                        "createdAt": "2022-09-06T13:10:57.000Z",
                        "updatedAt": "2022-09-06T13:35:29.000Z",
                        "user": {
                            "username": "Marcos",
                            "email": "marcos@gmail.com",
                            "score": 30
                        }
                    },
                    {
                        "id_challenge": 41,
                        "title": "dgsdsg",
                        "description": "sdgsdg",
                        "level": "2",
                        "image": "uploads/dgsdsg_cadastro.webp",
                        "tools": "CSS",
                        "assets": "https://drive.google.com/drive/folders/1SJnAOp7PdSslDzIyCNCCDplI3a71Vjk9?usp=sharing",
                        "colors": "#697689",
                        "fonts": "Abel",
                        "userId": 14,
                        "createdAt": "2022-09-10T23:50:15.000Z",
                        "updatedAt": "2022-09-10T23:50:15.000Z",
                        "user": {
                            "username": "Marcos",
                            "email": "marcos@gmail.com",
                            "score": 30
                        }
                }],
                count: 2
        }
    }
}

export default {
    get: jest.fn().mockResolvedValue(challenges)
}