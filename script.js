document.addEventListener('DOMContentLoaded', function() {
  fetch('catalog.json')
    .then(response => response.json())
    .then(books => {
      const tableBody = document.getElementById('book-table-body');

      books.forEach(book => {
        const row = tableBody.insertRow();
        const imgCell = row.insertCell(0);
        const img = document.createElement('img');
        img.src = book.image;
        img.alt = book.title;
        img.style.width = '100px'; // Установите желаемый размер изображения
        imgCell.appendChild(img);
        row.insertCell(1).textContent = book.title;
        row.insertCell(2).textContent = book.author;
        row.insertCell(3).textContent = `${book.price} руб.`;
        row.insertCell(4).textContent = book.description;
      });
    })
    .catch(error => console.error('Ошибка:', error));
});

// Предполагается, что у вас уже есть файл catalog.json с массивом объектов книг
document.addEventListener('DOMContentLoaded', function() {
  fetch('catalog.json')
    .then(response => response.json())
    .then(books => {
      const bookSelect = document.getElementById('bookTitle');

      books.forEach(book => {
        const option = document.createElement('option');
        option.value = book.title;
        option.textContent = book.title;
        bookSelect.appendChild(option);
      });
    })
    .catch(error => console.error('Ошибка:', error));
});

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('#navigation-panel .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});