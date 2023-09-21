import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/layout';

export const App = () => {
  return (
    <Layout>
      <RecipeList items={recipes} />
      <GlobalStyle />
    </Layout>
  );
};
