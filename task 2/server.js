const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'frontend')));

const recipes = [
    {
        name: "Pasta Carbonara",
        ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan cheese", "Black pepper"],
        instructions: "1. Cook spaghetti according to package instructions. 2. In a bowl, whisk together eggs, grated parmesan cheese, and black pepper. 3. Cook bacon until crispy. 4. Toss cooked spaghetti with bacon and egg mixture until coated. Serve immediately.",
        image: "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
        isFavorite: false
    },
    // Add more recipes here
];

app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});

app.post('/api/recipes/:name/favorite', (req, res) => {
    const recipeName = req.params.name;
    const index = recipes.findIndex(recipe => recipe.name === recipeName);
    if (index !== -1) {
        recipes[index].isFavorite = !recipes[index].isFavorite;
        res.json({ success: true, message: 'Favorite status updated successfully.' });
    } else {
        res.status(404).json({ success: false, message: 'Recipe not found.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
