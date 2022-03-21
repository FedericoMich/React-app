import { listRepos } from '../../api/apiRepos'


//
//1. restituisce dei risultati -->  un array repo valido
//2. non restituisce risultati --> un array vuoto
//3. controllo struttura del singolo repo restituito
//4. restituisce un risultato non conforme
//5. eccezione errore 404: non trova l'api --> "api non trovata"
//6. eccezione errore 500: errore nel server --> "server error"
//7. verifica della connettività
//


beforeAll(() => {
    jest.setTimeout(10000)
});

describe('controllo api ListRepos', () => {


    it('1. controllo presenza risultati', async () => {
        try {
            expect(await listRepos()).toContain("name").toContain('surname').toContain('login').toContain('class');
            expect(response.body).toEqual(["name", "surname", "login", "class", "link", "creationDate", "lastUpdate", "repoName", "idRepo"]);
            expect(response.statusCode).toBe(200);
        } catch (e) {
            expect(e)
        }
    });


    it('2. non restituisce risultati', async () => {
        try {
            expect(await listRepos()).not.toContain("name").toContain('surname').toContain('login').toContain('class');
            expect(response.body).not.toEqual(["name", "surname", "login", "class", "link", "creationDate", "lastUpdate", "repoName", "idRepo"]);
            expect(response.statusCode).not.toBe(200);
        } catch (e) {
            expect(e)
        }



    });


    it('3. controllo struttura del singolo repo restituito', () => {

    });

    it('4. restituisce un risultato non conforme', () => {

    });

    it('5. eccezione errore 404: non trova l api', () => {

    });

    it('6. eccezione errore 500: errore nel server', () => {

    });

    it('7. verifica della connettività', () => {

    });

});