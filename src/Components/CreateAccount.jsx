import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ImageLogin from "./ImageLogin";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { register } from "../Redux/features/loginSlice";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const CreateAccount = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

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

        <form
          className=" w-full max-w-lg flex flex-col gap-3 justify-around h-2/5 "
          onSubmit={formik.handleSubmit}
        >
          <div className=" flex gap-4 items-center flex-row flex-wrap ">
            <div className="w-full flex">
              <div className="flex flex-col gap-1 items-center w-full ">
                <label
                  htmlFor="displayName"
                  className="text-lg font-medium text-secondary"
                >
                  NickName
                </label>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  placeholder="Gambito"
                  className="border-transparent focus:border-transparent focus:ring-0 bg-transparent text-center focus:border-b-primary transition-all w-1/2 duration-500 focus:w-2/3 outline-none lg:w-full"
                  onChange={formik.handleChange}
                  value={formik.values.displayName}
                  required
                />
              </div>
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
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                />
              </div>
            </div>

            <div className="w-full flex">
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
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  required
                />
              </div>
              <div className="flex flex-col gap-1 items-center w-full">
                <label
                  htmlFor="validPassword"
                  className="text-lg font-medium text-secondary"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="validPassword"
                  name="validPassword"
                  placeholder="****"
                  className="border-transparent focus:border-transparent focus:ring-0 bg-transparent text-center focus:border-b-primary transition-all w-1/2 duration-500 focus:w-2/3 outline-none lg:w-full"
                  onChange={formik.handleChange}
                  value={formik.values.validPassword}
                  required
                />
              </div>
            </div>

            <div className="flex justify-center items-center w-full">
              <Button text={"Create Account"} type={"submit"} />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Link to="/" className="text-primary font-light">
              Login
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateAccount;
