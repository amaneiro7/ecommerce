function renderPage() {
  // detect path
  let currentPage;
  const path = window.location.pathname;

  const pages = document.querySelectorAll("#pages > *");

  // comparing pages with path

  pages.forEach((page) => {
    if (page.classList.contains(path)) {
      currentPage = path;
    }
  });
  if (!currentPage) {
    navigation("/not-found");
    return
  }

  // add class inactive
  pages.forEach((node) => {
    
    if (!node.classList.contains(currentPage)) {
      node.classList.add("inactive");
    } else {
      node.classList.remove("inactive");
    }
  });
}

function navigation(path) {
  window.history.pushState({}, "", path);
  renderPage();
}
export { renderPage, navigation };
