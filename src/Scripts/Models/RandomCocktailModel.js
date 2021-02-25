import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'


export const state = {
    cocktail: {
        name: '',
        ingredients: [],
        image: '',
        glass: '',
        instructions: ''

    }
}

export async function fetchCocktail() {

    try {
        const response = await axios.get(url)

        const data = await response.data.drinks[0]
        const drinks = Object.keys(data)
            .filter(key => key.match(/ingredient/i))
            .filter(key => !!data[key] || data[key] === ' ')
            .map(key => data[key])

        const ingredients = drinks.map((drink, index) => {
            return { drink: JSON.stringify(drink) }
        })


        return state.cocktail = {
            name: data.strDrink,
            ingredients,
            image: data.strDrinkThumb,
            glass: data.strGlass,
            instructions: data.strInstructions
        }
    } catch (err) {
        throw err
    }


}