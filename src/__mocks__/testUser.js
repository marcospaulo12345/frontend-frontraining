const user = {
    data: {
        user: {
            "username": "Marcos",
            "email": "marcos@gmail.com",
            "username": "739994Pa@"
        },
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjM3MjM2NjIsImV4cCI6MTY5NTE3MzI2Mn0.C_eBye27MFFPTdrrMVBuAomHmlEU-qnnUktmVADN2ew"
    }
}

export default {
    get: jest.fn().mockResolvedValue(user)
}