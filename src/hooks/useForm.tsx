import { useEffect, useReducer, MouseEvent } from "react";

type StateTypes = {
  values: object;
  errors: object;
  touched: object;
  isSubmitting: boolean;
};

type ActionTypes = {
  type: string;
  payload: object;
};

type FormProps = {
  onSubmit: () => void;
  initialValues: object;
  validation: (values: object) => object;
};

type handleChangeProps = {
  fieldName: string;
  event: MouseEvent<HTMLInputElement>;
};
const reducer = (state: StateTypes, action: ActionTypes): StateTypes => {
  switch (action.type) {
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
const useForm = (props: FormProps): object => {
  const { initialValues, validation } = props;

  const initialState: StateTypes = {
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // When state changes, check if there are any errors and set them
  useEffect(() => {
    const errors = validation(state.values);
    dispatch({ type: "SET_ERRORS", payload: errors });
  }, [state.values]);

  const handleChange = (fieldName: string, event: MouseEvent): void => {};

  return { ...state };
};

export default useForm;
