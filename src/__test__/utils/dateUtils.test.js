/*
const date = DateTime.fromISO(currentDate)
const humanReadableCreation = date.toLocaleString(DateTime.DATETIME_MED);
const date2 = DateTime.fromISO(lastUpdate)
const humanReadableUpdate = date2.toLocaleString(DateTime.DATETIME_MED);
*/

//ricevere una data e restiturire il formato corretto

/* 
1 - inviare una data corretta e verificare che il dato sia corretto
2- edge case / exception
    - inviare come data null
    -inviare come data come undefined
    -inviare una stringa non corretta
*/

//definizione del test case
import {formatDate} from '../../utils/dataUtils'

describe('Formattazione delle date', () => {


    it('formattazzione corretta delle date', () => {
        const mydate = '2020-01-01T00:00:00Z';
        const formattedDate = formatDate(mydate)
        expect(formattedDate).toEqual('1 gen 2020, 01:00');
    });


    it('inviare come data null', () => {
        const mydate = null;
        expect(() => formatDate(mydate)).toThrow()
    });

    it('inviare come data come undefined', () => {
        const mydate = undefined;
        expect(() => formatDate(mydate)).toThrow()
    });

    it('inviare una stringa non corretta', () => {
        const mydate = 'questa é una stringa'
        expect(() => formatDate(mydate)).toThrow()
    });

});