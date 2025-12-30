import React, { useContext, useState } from "react";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Bounce, toast } from "react-toastify";

const MyProfile = () => {
  const { auth, user } = useContext(AuthContext);
  const person = auth.currentUser;

  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(user.displayName || "");
  const [newPhoto, setNewPhoto] = useState(user.photoURL || "");

  const handleUpdate = async () => {
    await updateProfile(person, {
      displayName: newName,
      photoURL: newPhoto,
    })
      .then(() => {
        toast.success("Profile Updated Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
        toast.warn("Invalid Image URL", {
          position: "top-center",
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

  return (
    <div className="p-10">
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-3xl">
        My Profile
      </h1>

      <div>
        <div className="card w-3/4 mx-auto items-center p-10">
          <div className="avatar">
            <div className="ring-success-content ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img className="" src={user.photoURL} alt="Profile" />
            </div>
          </div>
          <div className="card-body items-center">
            <h2 className="card-title text-center">{user.displayName}</h2>
            <p>{user.email}</p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img className="w-8 md:w-10 cursor-pointer" src={facebook} alt="" />
            <img className="w-8 md:w-10 cursor-pointer" src={twitter} alt="" />
            <img
              className="w-8 md:w-10 cursor-pointer"
              src={instagram}
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center items-center p-2">
          <button
            onClick={() => setShowModal(true)}
            className="btn bg-[#15803D] text-white rounded"
          >
            Update Profile
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Update Profile
              </h2>

              <label className="block mb-2 text-sm font-medium">
                Display Name:
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="input input-bordered w-full mb-4"
              />

              <label className="block mb-2 text-sm font-medium">
                Photo URL:
              </label>
              <input
                type="text"
                value={newPhoto}
                onChange={(e) => setNewPhoto(e.target.value)}
                className="input input-bordered w-full mb-4"
              />

              <div className="flex justify-between">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn bg-gray-400 text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="btn bg-green-600 text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
