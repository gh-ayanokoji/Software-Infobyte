const recipes = [
    {
        name: "Pasta Carbonara",
        ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan cheese", "Black pepper"],
        instructions: "1. Cook spaghetti according to package instructions. 2. In a bowl, whisk together eggs, grated parmesan cheese, and black pepper. 3. Cook bacon until crispy. 4. Toss cooked spaghetti with bacon and egg mixture until coated. Serve immediately.",
        image: "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg"
    },
    // Add more recipes here
];

function displayRecipes(recipes) {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";
    recipes.forEach(recipe => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");
        const favoriteIcon = recipe.isFavorite ? "&#9733;" : "&#9734;";
        const favoriteClass = recipe.isFavorite ? "favorited" : "";
        recipeDiv.innerHTML = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <span class="favorite-icon ${favoriteClass}" onclick="toggleFavorite('${recipe.name}')">${favoriteIcon}</span>
        `;
        recipeList.appendChild(recipeDiv);
    });
}

displayRecipes(recipes);

function search() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const matchedRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchInput) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))
    );
    displayRecipes(matchedRecipes);
}

function toggleFavorite(recipeName) {
    const index = recipes.findIndex(recipe => recipe.name === recipeName);
    if (index !== -1) {
        recipes[index].isFavorite = !recipes[index].isFavorite;
        displayRecipes(recipes);
    }
}
