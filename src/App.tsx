import GlobalStyle from "./styles/Global";
import Input from "./components/Input/Input";
import { FormBox } from "./App.styled";
import { searchRecipesApi } from "./api/food";

const App = (): React.JSX.Element => {
  const handleSearch = (): void => {
    searchRecipesApi({ query: "pasta" }).then((data) => console.log(data));
  };
  return (
    <div>
      <GlobalStyle />
      <FormBox>
        <form action="">
          <Input label="Search for the ingredient" />
          {/* <button onClick={handleSearch}>SEARCH FOR FOOOOOOD</button> */}
        </form>
      </FormBox>
    </div>
  );
};

export default App;
