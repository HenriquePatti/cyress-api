///<reference types='cypress' />

// describe: agrupa casos de teste por funcionalidade ou contexto;
// it: define um caso de teste automatizado;

describe('Activities / Atividades', () => {
    const baseUrl = `https://fakerestapi.azurewebsites.net/api/v1`;

    it('Criar uma nova atividade', () => {
        // POST /Activities
        cy.request({
            method: 'POST',
            url: `${baseUrl}/Activities`,
            body: {
                "id": 81938123,
                "title": "Workshop",
                "dueDate": "2026-03-19T22:54:55.861Z",
                "completed": true
            }
        }).then((response)=> {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal(81938123);
            expect(response.body.title).to.equal('Workshop');
        })
    })

    it('Obter uma atividade', ()=> {
        // GET / Activities
         cy.request({
            method: 'GET',
            url: `${baseUrl}/Activities/1`,
        }).then((response)=> {
            expect(response.status).to.equal(200);
        })
    })

    it('Obter uma atividade não existente', ()=> {
        // GET / Activities
         cy.request({
            method: 'GET',
            url: `${baseUrl}/Activities/12312321`,
            headers: {
                Accept: 'text/plain; v=1.0'
            },
            failOnStatusCode: false // Impede que a requisição falhe automaticamente quando a API retorna status HTTP 4xx ou 5xx.
        }).then((response)=> {
            expect(response.status).to.equal(404);
        })
    })
})