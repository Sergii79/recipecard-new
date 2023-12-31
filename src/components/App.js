import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import { RecipeForm } from './RecipeForm/RecipeForm';
import initialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/layout';

export class App extends Component {
  state = {
    recipes: initialRecipes,
  };

  addRecipe = newRecipe => {
    this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe],
    }));
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }));
    console.log(recipeId);
  };

  render() {
    return (
      <Layout>
        <RecipeForm onSave={this.addRecipe} />
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <GlobalStyle />
      </Layout>
    );
  }
}
