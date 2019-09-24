export const fetchRecipes = () => {
  const response = fetch(
    'https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json'
  );
  return response.then(res => {
    if (res.status >= 400) {
      throw new Error('Error fetching Recipes');
    } else {
      return res.json();
    }
  });
};
