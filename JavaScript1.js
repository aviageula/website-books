function Book(bookName, authorName, score) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.score = score;
};


function reset() {
    document.getElementById('bookName').value = "";
    document.getElementById('authorName').value = "";
    document.getElementById('score').value = "";
}

function addBook() {
    var bookName = document.getElementById('bookName').value;
    var authorName = document.getElementById('authorName').value;
    var score = document.getElementById('score').value;
    var book = new Book(bookName, authorName, score);
    addToList(book);
    reset();
}

function addToList(book) {
    var bookName1 = document.getElementById('bookName');
    var authorName1 = document.getElementById('authorName');
    var score1 = document.getElementById('score');
    if (bookName1.value.trim().length == 0) {
        alert("בבקשה הכנס שם ספר על מנת שלא אכעס!");
        bookName1.className = "borderRed";
        return;
 
    }

    if (authorName1.value.trim().length == 0) {
        alert("בבקשה הכנס שם סופר על מנת שלא אכעס!");
        authorName1.className = "borderRed";
        return;
    } 
    
    if (!((typeof parseInt(score1.value) == "number") && (score1.value >= 1) && (score1.value <= 10)) ) {
        alert("בבקשה הכנס מספר בין 1 ל10 לפני שאדלק!!!");
        score.className = "borderRed";
        return;
    }
    var newElement = document.createElement("li");
    var bookNameDiv = document.createElement("div");
    bookNameDiv.innerHTML = book.bookName;
    bookNameDiv.className = "left";
    var authorNameDiv = document.createElement("div");
    authorNameDiv.innerHTML = book.authorName;
    authorNameDiv.className = "center";
    var scoreDiv = document.createElement("div");
    scoreDiv.innerHTML = book.score;
    scoreDiv.className = "right";
    newElement.appendChild(bookNameDiv);
    newElement.appendChild(authorNameDiv);
    newElement.appendChild(scoreDiv);
    var ul = document.getElementById("bookList");
    ul.appendChild(newElement);

}
var resetTheList = function() {
    document.getElementById("bookList").innerHTML = '';
};
