import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {

    static defaultProps = {

        recipes: [{
            title: "Spaghetti",
            ingredients: ['pasta', '8 cups of water', '1 box of spaghetti'],
            instructions: "Open jar of Spaghetti sauce. Bring water to a simmer. Boil the pasta. Cook the pasta until done. Combie the pasta and sauce.",
            img: "spaghetti.jpg"
          }, 
          {
            title: "Milkshake",
            ingredients: ['2 Scoops of Ice cream', '8 ounces of milk'],
            instructions: "Combine the ice cream and milk. Blend until creamy.",
            img: "milkshake.jpeg"
          },
          {
            title: "Avocado Toast",
            ingredients: ['2 slices of bread', '1 avocado', '1 tablespoon of olive oil', '1 pinch of salt, pepper'],
            instructions: "Toast the bread. Slice avocado and spread on the bread. Add salt, oil, and pepper to taste.",
            img: "avocadoToast.jpg"
          }
        ]
    
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }


    render() { 

        const recipes = this.props.recipes.map((r, index) => {
            return <Recipe key={index} {...r} />
        })

        return ( 
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}
 
export default RecipeList;