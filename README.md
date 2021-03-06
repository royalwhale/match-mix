# Match & Mix

![Match&Mix Homepage](https://github.com/royalwhale/match-mix/blob/parvis/wireframes/Home:Index.png)
MVP
Build an application that includes two models: one model is a home bar list
and the second model is a log of cocktail recipes. The home bar list schema accepts
a name and ingredients. The cocktail recipe model accepts the name of a cocktail recipe and
ingredients. The cocktail recipe view displays all submitted recipe names and allows the user to submit new recipes. It also allows the user to click into the recipe names to view the ingredients, as well as edit the recipe and delete the recipe. The bar view displays all created bar names (e.g. Connor's bar, Parvis' bar, etc.) and allows the user to create a new bar. It allows the user to click into the bar name to view its ingredients and match all viable cocktail recipes that can be made with those ingredients. 
It also allows the user to edit the bar ingredients as well as delete the bar.

User stories
-The user lands on the home/index page which displays a nav, including The Bar and Cocktail Recipes, as well as a site description and information
-The user navigates to The Bar
    -The user lands on The Bar views page, displaying the page title, a nav to Home and Recipes, a "create new bar" button, and a list of available collections
        -The user selects "create new bar" and navigates to the Create view
        -This displays a page title, a nav to Home & Recipes & The Bar, a bar name input, and displays collection categories with ingredients available to select
        -The user selects submit and is redirected back to The Bar

        -The user selects a collection name and navigates to the collection view page
        -This displays a page title, a nav, buttons to Edit and Delete the collection, a list of collection ingredients/contents, and a list of recipes whose ingredients match the collection ingredients/contents
        -The user may select a recipe to navigate to that recipe's view page
        -The user may select Delete Collection to destroy the collection and redirect to The Bar
            -The user selects Edit Collection and navigates to the Edit views page
            -This displays a page title, a nav to Home & Recipes & the collection view page, a bar name input, and displays collection categories with ingredients available to select
            -The user selects submit and is redirected back to the collection view page
-The user navigates to Cocktail Recipes
    -The user lands on Cocktail Recipes views page, displaying the page title, a nav to Home and The Bar, a "create new recipe" button, and a list of available recipes
        -The user selects "create new recipe" and navigates to the Create view
        -This displays a page title, a nav to Home & The Bar & Cocktail Recipes, a recipe name input, and displays categories with ingredients available to select
        -The user selects submit and is redirected back to Cocktail Recipes

        -The user selects a recipe name and navigates to the recipe view page
        -This displays a page title, a nav, buttons to Edit and Delete the recipe, and a list of recipe ingredients/contents
        -The user may select Delete Recipe to destroy the recipe and redirect to Cocktail Recipes
            -The user selects Edit Recipe and navigates to the Edit views page
            -This displays a page title, a nav to Home & The Bar & the recipe view page, a recipe name input, and displays categories with ingredients available to select
            -The user selects submit and is redirected back to the recipe view page


Wireframes --> 9 total
home/index page --> bars & recipes
  bars --> nav & create new bar & list of bars
    create bar --> nav & a form & submit
    indiv. bars --> name & nav & edit & list of ingredients & list of matched recipes & delete
      edit bar --> nav & a form & submit
  recipes --> nav & create new cocktail & list of cocktails
    create cocktail --> nav & a form & submit
    cocktail --> name & nav & edit & list of ingredients & delete
      edit cocktail --> nav & a form & submit


Ingredient Types
-Spirits
-Soda
-Juice
-Mixer
-Beer/Wine/Champagne
-Syrup
-Bar stock
-Garnish
