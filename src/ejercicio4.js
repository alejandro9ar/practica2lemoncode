function isBookRead(books, titleToSearch) {
    var book = books.find(function (book) { return book.title === titleToSearch; });
    return book ? book.isRead : false;
}
function ejercicio4() {
    console.log("***************** EJERCICIO 4 ****************");
    var books = [
        { title: "Harry Potter y la piedra filosofal", isRead: true },
        { title: "Canción de hielo y fuego", isRead: false },
        { title: "Devastación", isRead: true },
    ];
    console.log("books:", books);
    console.log("isBookRead(books, 'Devastación')", isBookRead(books, "Devastación")); // true
    console.log("isBookRead(books, 'Canción de hielo y fuego')", isBookRead(books, "Canción de hielo y fuego")); // false
    console.log("isBookRead(books, 'Los Pilares de la Tierra')", isBookRead(books, "Los Pilares de la Tierra")); // false
}
