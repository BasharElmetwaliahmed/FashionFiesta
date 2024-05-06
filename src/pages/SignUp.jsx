import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import reducer, { initialState } from "../features/auth/formReducer";

function SignUp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { signUp } = useAuth();

  const submitHandler = async (e) => {
    let error = false;
    e.preventDefault();

    if (
      !/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        state.password
      )
    ) {
      dispatch({
        type: "SET_PASSWORD_ERROR",
        payload:
          "password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters",
      });

      error = true;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      dispatch({
        type: "SET_EMAIL_ERROR",
        payload: "email must be in form of example@email.com",
      });
      error = true;
    }

    if (state.fullName.trim() === "") {
      dispatch({
        type: "SET_FULLNAME_ERROR",
        payload: "fullname mustn't be empty",
      });
      error = true;
    }

    if (!error) {
      await signUp(state.fullName, state.email, state.password);
    }
  };

  return (
    <main className="flex flex-col gap-16 sec-top justify-center items-center h-[calc(100vh_-_96px)] container">
      <h2 className="text-5xl font-semibold">Create Account</h2>
      <form
        className="flex flex-col gap-2  w-full  md:w-[500px] "
        onSubmit={submitHandler}>
        <div>
          <label htmlFor="fullname" className="input-label">
            Full name
          </label>
          <input
            type="text"
            id="fullname"
            className="input"
            placeholder="John"
            onChange={(e) =>
              dispatch({ type: "UPDATE_FULLNAME", payload: e.target.value })
            }
            required
          />
          {state.fullNameError && (
            <p className="error-msg">*{state.fullNameError}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="example@example.com"
            onChange={(e) =>
              dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
            }
            required
          />
          {state.emailError && <p className="error-msg">*{state.email}</p>}
        </div>
        <div>
          <label htmlFor="email" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="email"
            className="input"
            onChange={(e) =>
              dispatch({ type: "UPDATE_PASSWORD", payload: e.target.value })
            }
            placeholder="At least 8 characters"
            required
          />
          {state.passwordError && (
            <p className="error-msg">*{state.passwordError}</p>
          )}
        </div>

        <button className="rounded-md bg-primary-700 text-white p-2 mt-6 hover:scale-95 hover:border-2 border-primary-400 transition-all duration-300 hover:shadow-lg">
          Sign Up
        </button>
        <p className="my-2">
          Already have account{" "}
          <Link className="text-primary-700 font-bold" to="/signin">
            sign in
          </Link>
        </p>
      </form>
    </main>
  );
}

export default SignUp;
