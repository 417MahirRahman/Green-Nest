import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { validPassword } from "../../utility/validation";
import { Bounce, toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { auth, createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleForm = (e) => {
    e.preventDefault();
    const Form = e.target;
    const name = Form.name.value;
    const image = Form.image.value;
    const email = Form.email.value;
    const password = Form.password.value;

    const validationError = validPassword(password);
    if (validationError) {
      setError(validationError);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: image })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: image });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        navigate("/");
        toast.success("Account Created Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        toast.error(`Invalid Information`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
        toast.success("Account Created Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  };

  const toggolePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center p-5 md:p-15 space-y-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        Register
      </h1>
      <form onSubmit={handleForm} className="w-full">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-11/12 mx-auto md:w-xs border p-4">
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input w-full"
            placeholder="Your Name"
            required
          />

          <label className="label">Image URL</label>
          <input
            name="image"
            type="text"
            className="input w-full"
            placeholder="Image URL"
            required
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="input w-full"
              placeholder="Password"
              required
            />
            <button
              onClick={toggolePassword}
              className="absolute top-4 right-3"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="btn bg-[#FACC15] border-none text-[#15803D] mt-4"
          >
            Register
          </button>

          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="font-semibold text-center">
            Already have an account?{" "}
            <Link className="text-blue-700" to={"/login"}>
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
