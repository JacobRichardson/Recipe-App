import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {

    render() { 

        const recipes = this.props.recipes.map((r, index) => {
            return <Recipe key={index} {...r} />
        });

        return ( 
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}
 
export default RecipeList;