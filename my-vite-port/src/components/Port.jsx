import hero from "../assets/pngegg - 2022-12-31T123205 1.svg";
import rec18 from "../assets/Group 16.svg";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { useState} from "react";
import {BiLogoGoogle} from "react-icons/bi";
import {AiFillApple} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Modal from "react-modal";
// import { GrView } from "react-icons/gr";

export default function Port() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  
  const [loginPage, setLoginPage] = useState({
    page1: true,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
  });
  return (
    <>

          <div className="border border-white rounded-2xl w-[50%] pl-3 mt-3 pb-3 ml-8 py-2">
            <span className="gap-4">
              <h1 className="text-xl font-bold">New to Twitter?</h1>
              <h1 className="text-[12px]">
                Sign up now to get your own personalized timeline!
              </h1>
              <button className=" bg-white py-[8px] mt-3 text-black px-12 rounded-full font-bold flex  w-[90%]">
                <BiLogoGoogle className="mt-1"/> Sign up with Google
              </button>

              <button className=" bg-white py-[8px] mt-3 text-black px-12 rounded-full font-bold flex  w-[90%]">
                <AiFillApple className="mt-1"/> Sign up with Apple
              </button>

              <Modal
                style={{
                  overlay: {
                    position: "fixed",
                    top: "0%",
                    left: "0%",
                    right: "0%",
                    bottom: "0%",
                    backgroundColor: "#00000078",
                    zIndex: 100,
                  },
                }}
                className="absolute top-[100px] mx-4 rounded-[5px] lg:top-auto md:lg:mt-[15vh] left-0 lg:left-[32%] lg:right-[35%] right-0 h-auto pb-12 overflow-y-auto overflow-auto bg-black z-50 outline-none border-0 flex flex-col justify-between shadow-[5px_5px_30px_0px_#00000040]"
                isOpen={modal}
                shouldCloseOnOverlayclick={true}
                onRequestClose={closeModal}
                ariaHideApp={false}
              >
               {loginPage.page1 && (
        <div className="md:lg:w-[100%] w-[100%] rounded-xl bg-black text-slate-300 md:lg:shadow-md shadow-xl md:lg:h-[70vh] h-[80vh]   ">
          <span className=" flex gap-32">
            <span className="flex flex-row gap-2 justify-center mt-10 pl-6">
              <img src={rec18} alt="" />
              <img src={rec18} alt="" className="" />
               <img src={rec18} alt="" />{" "}
            </span>
            <h1 className="md:lg:text-2xl text-4xl text-center pt-8">My-Portfolio</h1>
          </span>
          <hr className="p-[2px] bg-[#1D4ED8]" />

          <img
            src={hero}
            alt=""
            className="border-2 bg-[#1D4ED8] border-slate-50 rounded-[100%] md:lg:w-20 w-[23%] mb-4 mt-4 ml-[40%]"
          />

          <span className="text-center">
            <h1 className="md:lg:text-xl text-5xl font-mono font-semibold animate-pulse">
              Nwamini Emmanuel O.
            </h1>
            <h1 className="md:lg:text-base text-2xl font-medium">Mern/Laravel Developer</h1>
          </span>

          <span>
            <h1 className="px-2 md:lg:text-base text-center text-3xl mt-6">
              A Freelancer ,Web-Developer, Software Engineer, Crypto-Trader and
              A Teacher
            </h1>
          </span>

          <span className="flex gap-4 pl-20 pt-6">
            <span>
              <h1 className="md:lg:text-xl text-2xl font-mono font-semibold pl-32">
                Capabilities:
              </h1>
            </span>
            <span>
              <h1 className="md:lg:text-xl text-3xl font-mono font-normal">Frontend Dev.</h1>
              <h1 className="md:lg:text-xl text-3xl font-mono font-normal">Backend Dev.</h1>
              <h1 className="md:lg:text-xl text-3xl font-mono font-normal">Database Mgt.</h1>
              <h1 className="md:lg:text-xl text-3xl font-mono font-normal">Restful-Api.</h1>
            </span>
          </span>

          <span className="flex gap-4 pt-6 mb-6 pl-12">
            <span>
              <h1 className="md:lg:text-xl text-4xl font-mono font-semibold ">
                Social links:
              </h1>
            </span>

            <span className="flex gap-2">
              <a href="">
                <h1 className="md:lg:text-xl text-4xl font-mono font-normal flex">
                  {" "}
                  <BsFacebook className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="md:lg:text-xl text-4xl font-mono font-normal flex">
                  {" "}
                  <BsLinkedin className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="md:lg:text-xl text-4xl font-mono font-normal flex">
                  {" "}
                  <BsInstagram className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="md:lg:text-xl text-4xl font-mono font-normal flex">
                  {" "}
                  <BsTwitter className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="md:lg:text-xl text-4xl font-mono font-normal flex">
                  {" "}
                  <AiOutlineGithub className="mt-1" />
                </h1>
              </a>
            </span>
          </span>

          <span className="">
            <a href="" className="md:lg:text-xl text-4xl font-mono pl-12">
              Link to my resume: Resume
            </a>
          </span>

          <div className="flex justify-center mt-8">
            <button
              className="rounded-md bg-black border-2 px-8 py-2 text-slate-50"
              onClick={() =>
                setLoginPage({ ...loginPage, page1: false, page2: true })
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
      {loginPage.page2 && (
        <div className="md:lg:w-[100%] w-[100%] rounded-xl py-4 bg-black text-slate-300 md:lg:shadow-md shadow-xl md:lg:h-[70vh] h-[80vh] ">
          <span className=" flex gap-32">
            <span className="flex flex-row gap-2 justify-center my-4 pl-6">
              <img src={rec18} alt="" /> 
              <img src={rec18} alt="" />
              <img src={rec18} alt="" />
            </span>
            <h1 className="text-center flex flex-row-reverse md:lg:text-2xl text-6xl py-4">
              <BiArrowBack
                className="cursor-pointer mt-2"
                onClick={() =>
                  setLoginPage({ ...loginPage, page1: true, page2: false })
                }
              />
              Projects
            </h1>
          </span>
          <hr className="p-[2px] bg-[#1D4ED8]" />
                 <span className="w-full flex gap-2 px-4 mt-2">
                    <div className="w-1/3 border-2 px-2 border-slate-50">
                        <img src={hero} alt="" />
                        <span>
                      <h1 className="text-white md:lg:text-xs text-xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white md:lg:text-sm text-xl text-center">
                        React | Redux | Tailwind
                      </h1>
                    </span>
                  
                    </div>

                    <div className="w-1/3 border-2 px-2 border-slate-50">
                        <img src={hero} alt="" />
                        <span>
                      <h1 className="text-white md:lg:text-xs text-xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white md:lg:text-sm text-xl text-center">
                        React | Redux | Tailwind
                      </h1>
                    </span>
                  
                    </div>


                    <div className="w-1/3 border-2 px-2 border-slate-50">
                        <img src={hero} alt="" />
                        <span>
                      <h1 className="text-white md:lg:text-xs text-xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white md:lg:text-sm text-xl text-center">
                        React | Redux | Tailwind
                      </h1>
                    </span>
                  
                    </div>

                 </span>

                 <span className="w-full flex gap-2 px-4 mt-4">
                 <div className="w-1/3 border-2 px-2 border-slate-50">
                        <img src={hero} alt="" />
                        <span>
                      <h1 className="text-white md:lg:text-xs text-xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white md:lg:text-sm text-xl text-center">
                        React | Redux | Tailwind
                      </h1>
                    </span>
                  
                    </div>

                    <div className="w-1/3 border-2 px-2 border-slate-50">
                        <img src={hero} alt="" />
                        <span>
                      <h1 className="text-white md:lg:text-xs text-xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white md:lg:text-sm text-xl text-center">
                        React | Redux | Tailwind
                      </h1>
                    </span>
                  
                    </div>

                    <div className="w-1/3 border-2 px-2 border-slate-50">
                        <img src={hero} alt="" />
                        <span>
                      <h1 className="text-white md:lg:text-xs text-xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white md:lg:text-sm text-xl text-center">
                        React | Redux | Tailwind
                      </h1>
                    </span>
                  
                    </div>
                 </span>
         

         
          <span className="flex gap-4 pt-4 mb-6 pl-12">
            <span>
              <h1 className="md:lg:text-xl text-4xl font-mono font-semibold ">
                Social links:
              </h1>
            </span>

            <span className="flex gap-2">
              <a href="">
                <h1 className="md:lg:text-xl text-3xl font-mono font-normal flex">
                  {" "}
                  <BsFacebook className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="md:lg:text-xl text-3xl font-mono font-normal flex">
                  {" "}
                  <BsLinkedin className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="md:lg:text-xl text-3xl font-mono font-normal flex">
                  {" "}
                  <BsInstagram className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="md:lg:text-xl text-3xl font-mono font-normal flex">
                  {" "}
                  <BsTwitter className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="md:lg:text-xl text-3xl font-mono font-normal flex">
                  {" "}
                  <AiOutlineGithub className="mt-1" />
                </h1>
              </a>
            </span>
          </span>

          <div className="flex justify-center mt-8">
            <button
              className="rounded-md border-2 flex bg-black px-8 py-2 text-slate-50"
              onClick={() =>
                setLoginPage({ ...loginPage, page2: false, page3: true })
              }
            >
              Next
            </button>
          </div>
        </div>
      )}

      {loginPage.page3 && (
        <div className="md:lg:w-[100%] w-[100%] rounded-xl bg-black text-slate-300 md:lg:shadow-md shadow-xl md:lg:h-[70vh] h-[80vh]  ">
        <span className=" flex gap-32">
          <span className="flex flex-row gap-2 justify-center mt-10 pl-6">
            <img src={rec18} alt="" /> <img src={rec18} alt="" />{" "}
            <img src={rec18} alt="" />
          </span>
          <h1 className="text-center flex flex-row-reverse md:lg:text-2xl text-5xl pt-8">
            <BiArrowBack
              className="cursor-pointer mt-2"
              onClick={() =>
                setLoginPage({ ...loginPage, page2: true, page3: false })
              }
            />
            Contact
          </h1>
        </span>
        <hr className="p-[2px] bg-[#1D4ED8]" />
        

        <form action="" className="gap-4 bg-black mt-6 border-1 ">
            <span className="flex flex-col w-[85%] md:lg:w-[80%] mx-10 gap-4 border-slate-500 border-2 px-6 py-2">
            <input type="text" placeholder="Name" className="text-center bg-black border-2 rounded-sm border-slate-500 "/>
            <input type="text" placeholder="Name" className="text-center bg-black border-2 rounded-sm border-slate-500 "/>

            <textarea name="" id="" cols="30" rows="9" className="bg-black border-2 md:lg:h-[25vh] h-[40vh] border-slate-500"></textarea>

            <button className="px-4 py-2 border border-slate-600 w-[20%]">Submit</button>
            </span>
        </form>
        

        
       
 
        <span className="flex gap-4 pt-4 mb-6 pl-12">
          <span>
            <h1 className="text-xl font-mono font-semibold ">
              Social links:
            </h1>
          </span>

          <span className="flex gap-2">
            <a href="">
              <h1 className="text-xl font-mono font-normal flex">
                {" "}
                <BsFacebook className="mt-1" />
              </h1>
            </a>
            <a href="">
              <h1 className="text-xl font-mono font-normal flex">
                {" "}
                <BsLinkedin className="mt-1" />
              </h1>
            </a>
            <a href="">
              <h1 className="text-xl font-mono font-normal flex">
                {" "}
                <BsInstagram className="mt-1" />
              </h1>
            </a>
            <a href="">
              <h1 className="text-xl font-mono font-normal flex">
                {" "}
                <BsTwitter className="mt-1" />
              </h1>
            </a>
            <a href="">
              <h1 className="text-xl font-mono font-normal flex">
                {" "}
                <AiOutlineGithub className="mt-1" />
              </h1>
            </a>
          </span>
        </span>

        <div className="flex justify-center mt-8">
          <button
            className="rounded-md border-2 flex bg-black px-8 py-2 text-slate-50"
            
          >
            Thanks
          </button>
        </div>
      </div>
      )}
              </Modal>
              <button
                className=" bg-white py-[8px] mt-3 text-black px-12 rounded-full font-bold w-[90%] "
                onClick={openModal}
              >
                Create account
              </button>

              <h1 className="text-sm pt-3">
                By signing up, you agree to the{" "}
                <b className="text-blue-600 hover:underline cursor-pointer">
                  Terms of Service
                </b>{" "}
                and{" "}
                <b className="text-blue-600 hover:underline cursor-pointer">
                  Privacy Policy,
                </b>{" "}
                including{" "}
                <b className="text-blue-600 hover:underline cursor-pointer">
                  Cookie Use.
                </b>
              </h1>
            </span>
          </div>

    </>
  );
}
