import { RecipeList } from './RecipeList';
import recipes from '../recipes.json';

export const App = () => {
  return (
    <>
      <RecipeList items={recipes} />
    </>
  );
};
console.log(RecipeList);
console.log(RecipeList);
