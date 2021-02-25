import axios from 'axios'

let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'

export const state = {
    glasses: []
}

export async function getGlasses() {
    try {
        const response = await axios.get(url)
        const { data } = response;

        state.glasses = data.drinks.map((drink) => {
            return {
                glassName : drink.strGlass
            }
        })
    } catch (err) {
        console.log(err)
    }

};

