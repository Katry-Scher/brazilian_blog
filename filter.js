document.addEventListener("DOMContentLoaded", function () {
    const filterItems = document.querySelectorAll(".filter-item");
    const articles = document.querySelectorAll(".articles_cont");

    filterItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove a classe "active" do item atualmente selecionado e adiciona ao novo item
            document.querySelector(".filter-item.active")?.classList.remove("active");
            this.classList.add("active");

            const category = this.getAttribute("data-category").toLowerCase();
            console.log("Filtrando por:", category);

            // Filtra os artigos
            articles.forEach(article => {
                const articleCategory = article.getAttribute("data-category").toLowerCase();

                if (category === "all" || articleCategory === category) {
                    article.style.display = "block"; // Mantém a estrutura do grid
                } else {
                    article.style.display = "none";
                }
            });
        });
    });
});


