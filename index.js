let BOOKFORM = document.getElementById("book-form");
const LIBRARY = document.getElementById("book-container")


const myLibrary = [];


function changeRead(element,id) {
  if (element.classList.contains("false")) {
    element.className = "true";
    myLibrary[id].read = !myLibrary[id].read;
    console.log(myLibrary[id]);
  }
  else if(element.classList.contains("true")){
    element.className = "false";
    myLibrary[id].read = !myLibrary[id].read;
    console.log(myLibrary[id]);

  }
}


function removeBook(e,id){
  myLibrary.splice(id, 1);
  e.parentElement.remove();
  console.log(myLibrary);
}

function createBook(title,author,pages,read,id) {
  const book_div = document.createElement("div");
  book_div.setAttribute("id", "book");
  
  book_div.innerHTML = `
                          <h1 id="book-title">${title}</h1>
                          <h2 id="book-author">${author}</h2>
                          <h2 id="book-pages">${pages} pages</h2>
                          <button id="book-read" class="${read}" onclick="changeRead(this,${id});">READ</button>
                          <button id="book-delete" onclick="removeBook(this,${id});">DELETE</button>
                      `;

  LIBRARY.appendChild(book_div);


  
}

function Book(title,author,pages,read,id){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function addBookToLibrary(title,author,pages,read,id) {
  myLibrary.push(new Book(title,author,pages,read,id));

  createBook(myLibrary[myLibrary.length-1].title,
            myLibrary[myLibrary.length-1].author,
            myLibrary[myLibrary.length-1].pages,
            myLibrary[myLibrary.length-1].read,
            myLibrary.length-1 //id
    );
}

BOOKFORM.addEventListener("submit", (e) => {
  e.preventDefault();

  let TITLE = document.getElementById("title");
  let AUTHOR = document.getElementById("author");
  let PAGENUM = document.getElementById("pagenum");
  let READ = document.getElementById("read");

  if (TITLE.value == "" || AUTHOR.value == "" || PAGENUM.value == "") {
    alert("check the field!");
  }
  else{
    addBookToLibrary(TITLE.value,AUTHOR.value,PAGENUM.value,READ.checked,myLibrary.length);
  
    TITLE.value = "";
    AUTHOR.value = "";
    PAGENUM.value = "";
    READ.checked = false;
  }

});