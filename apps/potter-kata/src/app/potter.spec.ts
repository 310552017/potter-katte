import { Potter } from './potter'

describe('Harry Potter book kata', function() {

    test('... a single book should cost 8 EUR', function() {
        const potter = new Potter();
        const number = 1;
        potter.addToBasket(potter.createBook(number));
        expect(potter.checkout()).toBe(8);
    });

    test('...the createBook method should return a book with expected number', function() {
        const potter = new Potter();
        const number = 2;
        expect(potter.createBook(number)).toMatchObject({ number });
    });

    test('...the addToBasket method should add books to the shopping basket', function() {
        const potter = new Potter();
        const book = potter.createBook(1);
        potter.addToBasket(book);
        expect(potter.basket).toHaveLength(1);
    });

    test('...x number of the same books should result in base price * x', function() {
        const potter = new Potter();
        const book = potter.createBook(1);
        potter.addToBasket(book);
        potter.addToBasket(book);
        expect(potter.checkout()).toBe(16);
        potter.addToBasket(book);
        expect(potter.checkout()).toBe(24);
    });

    test('...buying two different books results in a 5% discount', function() {
        const potter = new Potter();
        const book = potter.createBook(1);
        const book2 = potter.createBook(2);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        expect(potter.checkout()).toBe(15.2);
    });

    test('...buying three different books results in a 10% discount', function() {
        const potter = new Potter();
        const book = potter.createBook(1);
        const book2 = potter.createBook(2);
        const book3 = potter.createBook(3);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        expect(potter.checkout()).toBe(21.6);
    });

    test('...buying four different books results in a 20% discount', function() {
        const potter = new Potter();
        const book = potter.createBook(1);
        const book2 = potter.createBook(2);
        const book3 = potter.createBook(3);
        const book4 = potter.createBook(4);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        expect(potter.checkout()).toBe(25.6);
    });

    test('...buying five different books results in a 25% discount', function() {
        const potter = new Potter();
        const book = potter.createBook(1);
        const book2 = potter.createBook(2);
        const book3 = potter.createBook(3);
        const book4 = potter.createBook(4);
        const book5 = potter.createBook(5);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        potter.addToBasket(book5);
        expect(potter.checkout()).toBe(30);
    });

    test('...buying five different books and one duplicate', function() {

        const potter = new Potter();
        const book = potter.createBook(1);
        const book2 = potter.createBook(2);
        const book3 = potter.createBook(3);
        const book4 = potter.createBook(4);
        const book5 = potter.createBook(5);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        potter.addToBasket(book5);
        expect(potter.checkout()).toBe(38);

    });

    test('...buying two sets of different books', function() {

        const potter = new Potter();
        const book = potter.createBook(1);
        const book2 = potter.createBook(2);
        const book3 = potter.createBook(3);
        const book4 = potter.createBook(4);
        const book5 = potter.createBook(5);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        potter.addToBasket(book5);
        expect(potter.checkout()).toBe(45.2);

    });

    test('...buying five different books, and four additional same books', function() {

        const potter = new Potter();
        const book = potter.createBook(1);
        const book2 = potter.createBook(2);
        const book3 = potter.createBook(3);
        const book4 = potter.createBook(4);
        const book5 = potter.createBook(5);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        potter.addToBasket(book5);
        expect(potter.checkout()).toBe(62);

    });

    test('...buying many different books and many same books', function() {

        const potter = new Potter();
        const book = potter.createBook(1);
        const book2 = potter.createBook(2);
        const book3 = potter.createBook(3);
        const book4 = potter.createBook(4);
        const book5 = potter.createBook(5);

        // 5 x 1
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book);

        // 5 x 2
        potter.addToBasket(book2);
        potter.addToBasket(book2);
        potter.addToBasket(book2);
        potter.addToBasket(book2);
        potter.addToBasket(book2);

        // 2 x 3
        potter.addToBasket(book3);
        potter.addToBasket(book3);

        // 3 x 4
        potter.addToBasket(book4);
        potter.addToBasket(book4);
        potter.addToBasket(book4);

        // 1 x 5
        potter.addToBasket(book5);

        /**
         * 5 = 30
         * 4 = 25.6
         * 3 = 21.6
         * 2 = 15.2
         * 2 = 15.2
         */
        expect(potter.checkout()).toBe(107.6);

    });

    test(`...example in the readme - 
    2 copies of the first book
    2 copies of the second book
    2 copies of the third book
    1 copy of the fourth book
    1 copy of the fifth book = 51.60`, function() {

        const potter = new Potter();
        const book = potter.createBook(1);
        const book2 = potter.createBook(2);
        const book3 = potter.createBook(3);
        const book4 = potter.createBook(4);
        const book5 = potter.createBook(5);

        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        potter.addToBasket(book5);

        expect(potter.checkout()).toBe(51.60);
    });

});