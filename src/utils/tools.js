export function difHours(dateChallenge) {
    const hoje = new Date();
    const updatedAt = new Date(dateChallenge)
    const dif = new Date(hoje - updatedAt);
    const res = ''.concat(dif.getDay() + ' dias e ', dif.getUTCHours().toString())
    return res
}

export function returnColorTools(index) {
    const listTools = {
        HTML: '#6ABFDB',
        CSS: '#3E54A3', 
        JavaScript: '#CF6390', 
        React: '#5ED3F3', 
        VueJS: '#3FB27F', 
        Sass: '#C66394', 
        Bootstrap: '#533B78', 
        NodeJS: '#81B847', 
        Axios: '#671DDF', 
        Bulma: '#00D1B2', 
        Uikit: '#2A9ECE', 
        Materialize: '#EB7077', 
        Semantic_UI: '#35BDB2'
    };
    return listTools[index];
}