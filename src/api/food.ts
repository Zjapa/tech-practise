const baseUrl = "https://api.spoonacular.com/recipes";

const getRecpies = async (endpoint: string, config: object, params: object): Promise<object> => {
  const searchParams = new URLSearchParams({ ...params });
  const url = `${baseUrl}/${endpoint}?apiKey=${process.env.FOOD_API_KEY}&${searchParams}`;
  try {
    const result = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      ...config,
    });
    const recipes = await result.json();
    return recipes;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getRecpies;
