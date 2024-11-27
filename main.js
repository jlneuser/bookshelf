// test data

const books = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    imageURL: 'https://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    isbn: '9781921479311', 
    pageCount: 268
  }
];

const renderBooks = () => {
  document.querySelector('.books').replaceChildren();
  
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const template = `
      <div class="book col-md-6">
        <h1>${book.title}</h1>
        <div><strong>${book.author}</strong></div>
        <div><strong>${book.pageCount}</strong></div>
        <div><strong>${book.isbn}</strong></div>
        <img src="${book.imageURL}" alt="">
      </div>
    `;

    document.querySelector('.books').insertAdjacentHTML('beforeend', template);
  }
};

renderBooks();