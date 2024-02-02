let currentPage = 0;
const pages = document.querySelectorAll('.page');

function flipPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].style.transition = "transform 1s";
    pages[currentPage].style.transform = "rotateY(-180deg)";
    currentPage++;
    setTimeout(() => {
      pages[currentPage].style.transition = "transform 1s";
      pages[currentPage].style.transform = "rotateY(0)";
    }, 500); // Meio segundo para começar a mostrar a próxima página
  }
}

