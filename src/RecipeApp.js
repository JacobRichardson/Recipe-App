import React, { Component } from 'react';

import './RecipeApp.css';

import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import Navbar from './Navbar';

class RecipeApp extends Component {

  constructor(props) {
    
    super(props);
    
    this.state = {
        recipes: [
        {
          id: 0,
          title: "Spaghetti",
          ingredients: ['pasta', '8 cups of water', '1 box of spaghetti'],
          instructions: "Open jar of Spaghetti sauce. Bring water to a simmer. Boil the pasta. Cook the pasta until done. Combie the pasta and sauce.",
          img: "spaghetti.jpg"
        }, 
        {
          id: 1,
          title: "Milkshake",
          ingredients: ['2 Scoops of Ice cream', '8 ounces of milk'],
          instructions: "Combine the ice cream and milk. Blend until creamy.",
          img: "milkshake.jpeg"
        },
        {
          id: 2,
          title: "Avocado Toast",
          ingredients: ['2 slices of bread', '1 avocado', '1 tablespoon of olive oil', '1 pinch of salt, pepper'],
          instructions: "Toast the bread. Slice avocado and spread on the bread. Add salt, oil, and pepper to taste.",
          img: "avocadoToast.jpg"
        }
      ],

      nextRecipeId: 3,
      showForm: false
    }

    this.handleSave = this.handleSave.bind(this);

  }

  handleSave(recipe) {

    this.setState((prevState, props) => {

      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes:[...this.state.recipes, newRecipe],
        showForm: false
      }
    });


  }


  render() {

    const {showForm} = this.state;

    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm:true})}/>
        { showForm ?
            <RecipeInput 
              onSave={this.handleSave} 
              onClose={() => this.setState({showForm:false})} 
            />
            : null
        }

        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
