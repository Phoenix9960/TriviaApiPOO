class Categories {

    static printCategories() {
        const listCategories = document.getElementById('container-categories');

        fetch('https://opentdb.com/api_category.php')
            .then((response) => response.json())
            .then((categories) => {
                categories.trivia_categories.forEach((category) => {
                    listCategories.innerHTML += `<option value="${category.id}">${category.name}</option>`
                });
            });
    }
}

export default Categories;