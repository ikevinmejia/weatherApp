import React, { useContext } from "react";
import { Card, Dropdown } from "flowbite-react/lib/esm/components";
import avatar from "../assets/img/avatar.png";
import { useSelector } from "react-redux";
import FormProfile from "./FormProfile";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { getAuth } from "firebase/auth";
import { Contexto } from "../context/ContextProvider";

const MySwal = withReactContent(Swal);

const Profile = () => {
  const auth = getAuth();
  const { displayName, email, photoURL, uid } = useSelector(
    (state) => state.login
  );

  const {onShow, show} = useContext(Contexto)



  const deleteAccount = () => {
    MySwal.fire({
      title: "Do you want to delete your account?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#DC2626',
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteDoc(doc(db, "users", uid));
        MySwal.fire("Account deleted!", "", "success");
        auth.signOut();
      }
    });
  };

  return (
    <div className="w-full mx-auto max-w-sm">
      <Card>
        <div className="flex justify-end px-4 pt-4">
          <Dropdown inline={true} label="">
            <Dropdown.Item>
              <button className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 " onClick={onShow}>
                Edit
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <button
                className="block py-2 px-4 text-sm text-primary hover:bg-gray-100 "
                onClick={deleteAccount}
              >
                Delete Account
              </button>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div className="flex flex-col items-center pb-10">
          <figure className="mb-3 h-24 w-24 rounded-full overflow-hidden shadow-lg border  p-1 border-primary">
            <img
              className=" w-full h-full object-cover rounded-full"
              src={photoURL ? photoURL : avatar}
              alt="Bonnie image"
            />
          </figure>
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">
            {displayName}
          </h5>
          <span className="text-sm text-gray-500 ">{email}</span>
        </div>
      </Card>
      {
        show && <FormProfile />
      }

    </div>
  );
};

export default Profile;
