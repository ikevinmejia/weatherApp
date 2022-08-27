import React, { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { db } from "../firebase/firebaseConfig";
import { updateDoc, doc } from "firebase/firestore";
import { updateData } from "../Redux/features/loginSlice";
import { Contexto } from "../context/ContextProvider";
const MySwal = withReactContent(Swal);

const FormProfile = () => {
  const { displayName, email, uid } = useSelector((state) => state.login);
  const dispatch = useDispatch()
  const {onShow} = useContext(Contexto)

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
    },
    validationSchema: Yup.object({
      displayName: Yup.string().required(),
      email: Yup.string().email().required(),
    }),
    onSubmit: (values, { resetForm }) => {

        const {displayName, email} = values;

      const ref = doc(db, 'users', uid);

      updateDoc(ref, {displayName, email})

      dispatch(updateData(values))



      MySwal.fire({
        icon: "success",
        title: "Account Update",
      });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-4">
      <div className="mb-6">
        <label
          htmlFor="displayName"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your nickname
        </label>
        <input
          type="text"
          id="displayName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
          placeholder={displayName}
          onChange={formik.handleChange}
          value={formik.values.displayName}
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
          placeholder={email}
          onChange={formik.handleChange}
          value={formik.values.email}
          autoComplete="off"
          required
        />
      </div>
      <div className=" flex justify-between items-center gap-4 ">
        <button
          type="submit"
          className="text-white duration-300 transition-colors bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/3 px-5 py-2.5 text-center"
        >
          Submit
        </button>
        <button
        onClick={onShow}
          type="button"
          className="text-secondary transition-colors duration-300 hover:text-white bg-transparent border hover:bg-red-600 focus:ring-4 w-1/3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default FormProfile;
