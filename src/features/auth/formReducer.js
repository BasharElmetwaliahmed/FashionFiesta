export const initialState = {
  email: "",
  fullName: "",
  password: "",
  emailError:'',
  passwordError:'',
  fullNameError:'',
};
export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FULLNAME":
      return { ...state, fullName: action.payload ,fullNameError:''};
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload  ,emailError:''};
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload ,passwordError:''};
    case "SET_EMAIL_ERROR":
      return { ...state, emailError: action.payload };
    case "SET_PASSWORD_ERROR":
      return { ...state, passwordError: action.payload };
    case "SET_FULLNAME_ERROR":
      return { ...state, fullNameError: action.payload };
    default:
      return state;
  }
}
