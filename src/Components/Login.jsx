import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Button from "./Button";
import ImageLogin from "./ImageLogin";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { google } from "../firebase/firebaseConfig";

const Login = () => {
  const loginGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, google)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
    });
  };


  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      validPassword: "",
    },
    validationSchema: Yup.object({
      displayName: Yup.string()
        .min(2, "Nombre muy corto")
        .max(20, "Nombre muy Largo")
        .required("Este nombre es requerido"),
      email: Yup.string()
        .email("debe ser del tipo ana@ana.com")
        .required("Este email se requiere"),
      password: Yup.string()
        .required("este campo es obligatorio")
        .oneOf([Yup.ref("validPassword")], "Los Password No coinciden"),
      validPassword: Yup.string()
        .required("este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Los Password No coinciden"),
    }),
    onSubmit: (values) => {
        console.log(values);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async(userCredential) => {
            // Signed in
            await updateProfile(auth.currentUser, {
                displayName: values.displayName
            })
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
  });

  return (
    <div className="w-screen h-screen bg-loginWaves bg-bottom bg-no-repeat bg-mainBgColor bg-cover">
      <main className="w-full max-w-6xl h-[80vh] mx-auto flex flex-col justify-center items-center gap-7 lg:flex-row-reverse">
        <ImageLogin />

        <form className=" w-full max-w-md flex flex-col gap-3 justify-around h-2/5 lg:w-1/2">
          <div className=" flex flex-col gap-4 items-center lg:flex-row ">
            <div className="flex flex-col gap-1 items-center w-full ">
              <label
                htmlFor="email"
                className="text-lg font-medium text-secondary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="mail@mail.com"
                className="border-transparent focus:border-transparent focus:ring-0 bg-transparent text-center focus:border-b-primary transition-all w-1/2 duration-500 focus:w-2/3 outline-none lg:w-full"
              />
            </div>

            <div className="flex flex-col gap-1 items-center w-full">
              <label
                htmlFor="password"
                className="text-lg font-medium text-secondary"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="****"
                className="border-transparent focus:border-transparent focus:ring-0 bg-transparent text-center focus:border-b-primary transition-all w-1/2 duration-500 focus:w-2/3 outline-none lg:w-full"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Button text={"Login"} type={"submit"} />
          </div>

          <div className=" flex justify-center items-center gap-4">
            <button type="button" onClick={loginGoogle}>
              <FcGoogle size="30" />
            </button>
            <button type="button">
              <BsFacebook size="27" color="#0676E4" />
            </button>
          </div>

          <div className="flex justify-center items-center">
            <Link to="createAccount" className="text-primary font-light">
              Create a new account
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
