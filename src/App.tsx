import GlobalStyle from "./styles/Global";
import Input from "./components/Input/Input";
import { FormBox } from "./App.styled";
import getRecpies from "./api/food";

const App = (): React.JSX.Element => {
  const handleSearch = (): void => {
    getRecpies("findByIngredients", {}, { ingredients: "pasta" })
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <GlobalStyle />
      <FormBox>
        <form action="">
          <Input label="Search for the ingredient" />
          {/* TODO: create dropdown for food list  */}
        </form>
        <button onClick={handleSearch}>CLICKE</button>
      </FormBox>
    </div>
  );
};

export default App;
