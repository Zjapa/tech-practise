const baseUrl = "https://api.spoonacular.com/recipes/";

export const searchRecipesApi = (params: object = {}): Promise<object> => {
  const searchParams = new URLSearchParams({ ...params });
  return fetch(
    `${baseUrl}complexSearch?apiKey=${process.env.FOOD_API_KEY}&${searchParams}`
  ).then((res) => res.json());
};
