import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <RecipeList items={recipes} />
      <GlobalStyle />
    </>
  );
};
