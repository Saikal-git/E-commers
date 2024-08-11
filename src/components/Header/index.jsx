import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useSelector } from "react-redux";
import { LuLogOut } from "react-icons/lu";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeInput, setTypeInput] = useState(false);

  const { register, logIn, logOut, signInWithGoogle } = useAuth();
  const { user } = useSelector((s) => s.create);
  console.log(user, "user");

  async function handleRegister() {
    try {
      await register(email, password);
      setEmail("");
      setPassword("");
      setModal(false);
    } catch (error) {
      setError(error.message);
    }
  }
  async function handleLogIn() {
    try {
      await logIn(email, password);
      setEmail("");
      setPassword("");
      setModal(false);
    } catch (error) {
      setError(error.message);
    }
  }
  function handleGoogle() {
    signInWithGoogle();
    nav("/");
    setModal(false);
  }
  return (
    <>
      <div
        style={{
          borderBottom: "15px solid #D9D9D9",
        }}
        className="py-[40px] bg-[#6C757D] fixed w-full top-0  z-30 "
      >
        <div className="container">
          <div className="flex items-center justify-between ">
            <h1 className="text-3xl font-medium">ENSCENT</h1>
            <div className="text-2xl flex items-center gap-11">
              <Link to={"/"}>HOME</Link>
              <Link to={user ? "/products" : "*"}>PRODUCTS</Link>
              <Link
                to={`${user ? "/createProduct" : "*"}`}
                className={`${user ? null : "line-through"}`}
              >
                CREATE
              </Link>
            </div>
            <div className="flex items-center gap-9 text-2xl">
              <div className="flex items-center justify-center flex-col h-3">
                <a className="" onClick={() => setModal(!modal)}>
                  <FiUser />
                </a>
                <h1 className="text-[20px]">{user ? user.email : null}</h1>
              </div>
              <a className="">
                <FaRegHeart />
              </a>
              <Link to={"/basket"} className="">
                <FiShoppingCart />
              </Link>
              {user ? (
                <a
                  onClick={() => logOut()}
                  className="p-[10px] rounded-[50%] bg-gray-300"
                >
                  <LuLogOut />
                </a>
              ) : null}
            </div>
          </div>
          {modal ? (
            <div className="">
              <div className="w-[700px] h-[500px] flex-col gap-4 bg-gray-300 fixed top-[7pc] left-[30%] z-[60] rounded-[15px]">
                <div className="bg-gray-600 flex items-center justify-center py-[20px] text-2xl text-white font-bold rounded-tl-[15px] rounded-tr-[15px]">
                  <h1>LOG IN AS A SELLER</h1>
                </div>
                <div className="flex items-center justify-center flex-col gap-5 my-[30px]">
                  <div className="flex items-center flex-col gap-2">
                    <h1 className="text-[20px] font-medium">EMAIL</h1>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="text"
                      className="py-[15px] px-[120px] bg-gray-600 rounded-md text-white text-[20px]"
                    />
                  </div>
                  <div className="relative flex items-center flex-col gap-2">
                    <h1 className="text-[20px] font-medium">PASSWORD</h1>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type={typeInput ? "text" : "password"}
                      className="py-[15px] px-[120px] bg-gray-600 rounded-md text-white text-[20px]"
                    />
                    <a
                      onClick={() => setTypeInput(!typeInput)}
                      className="absolute top-[50px] right-[20px] text-[30px] text-white"
                    >
                      {!typeInput ? <IoEyeSharp /> : <BsEyeSlashFill />}
                    </a>
                  </div>
                  <div className="flex items-center gap-6">
                    <button
                      className="w-[170px] h-[55px] bg-gray-500 text-white text-2xl font-bold rounded-[10px] mt-[20px]"
                      onClick={handleLogIn}
                    >
                      SIGN IN
                    </button>
                    <button
                      className="w-[170px] h-[55px] bg-gray-500 text-white text-2xl font-bold rounded-[10px] mt-[20px]"
                      onClick={handleRegister}
                    >
                      SIGN UP
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-2xl px-16 py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    onClick={handleGoogle}
                  >
                    <svg
                      class="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                </div>
                <a
                  onClick={() => setModal(false)}
                  className="absolute top-7 right-7 text-2xl text-white"
                >
                  <IoCloseCircleOutline />
                </a>
              </div>
              <div className="bg"></div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="h-[128px]"></div>
      {/* <div className="fixed w-full h-4 bg-[#D9D9D9] z-20"></div> */}
      {/* <div className="h-[20px]"></div> */}
    </>
  );
};

export default Header;
//
