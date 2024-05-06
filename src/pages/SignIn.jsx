import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import reducer, { initialState } from "../features/auth/formReducer";

function SignIn() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { signIn } = useAuth();

  const submitHandler = async (e) => {
    let error = false;
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      dispatch({
        type: "SET_EMAIL_ERROR",
        payload: "email must be in form of example@email.com",
      });
      error = true;
    }

    if (!error) {
      try {
        await signIn(state.email, state.password);
        dispatch({ type: "CLEAR" });
      } catch (e) {}
    }
  };
  return (
    <main className="flex flex-col gap-16 justify-center items-center h-[calc(100vh_-_96px)] container sec-top">
      <h2 className="text-5xl font-semibold">Sign In</h2>
      <form
        className="flex flex-col gap-2  w-full  md:w-[500px] "
        onSubmit={submitHandler}>
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
        </div>
        <button className="rounded-md bg-primary-700 text-white p-2 mt-6 hover:scale-95 hover:border-2 border-primary-400 transition-all duration-300 hover:shadow-lg">
          Log in
        </button>
        <p className="my-2">
          Don't have account{" "}
          <Link className="text-primary-700 font-bold" to="/signup">
            sign up
          </Link>
        </p>
      </form>
    </main>
  );
}

export default SignIn;
