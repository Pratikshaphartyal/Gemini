import React, { useContext } from "react";
import {
  FaCode,
  FaLightbulb,
  FaUserCircle,
  FaCompass,
  FaMicrophone,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Context } from "../context/Context";
import logog from "../assets/logog.jpg";

const MainContent = () => {
  const { input, setInput, recentPrompt, showResult, resultData, onSent } =
    useContext(Context);

  return (
    <div className="flex-1 min-h-screen pt-[15vh] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between text-xl p-5 text-slate-700">
        <p>Gemini</p>
        <FaUserCircle />
      </div>

      <div className="max-w-[900px] w-full mx-auto flex-1 px-5 pb-[120px]">
        {!showResult ? (
          <>
            {/* Greeting */}
            <div className="my-12 text-[40px] text-slate-500 font-semibold p-5">
              <p>
                <span className="bg-gradient-to-r from-[#3667ee] to-[#ff5546] bg-clip-text text-transparent">
                  Hello Gemini.
                </span>
              </p>
              <p className="text-slate-400 text-xl mt-2">
                How can I help you today?
              </p>
            </div>

            {/* Suggestions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
              <SuggestionCard
                text="Suggest top 10 webseries."
                icon={<FaCompass />}
              />
              <SuggestionCard text="What is a loop." icon={<FaLightbulb />} />
              <SuggestionCard text="How earth was made." icon={<FaMessage />} />
              <SuggestionCard text="How does flexbox work?" icon={<FaCode />} />
            </div>
          </>
        ) : (
          // Response Section
          <div className="overflow-y-auto max-h-[calc(100vh-280px)] mt-5 pr-2 scrollbar-hidden">
            <div className="my-6 flex items-start gap-3">
              <FaUserCircle className="text-3xl mt-1 text-gray-600" />
              <p className="text-lg">{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-3">
              <img
                src={logog}
                alt="Gemini"
                className="w-8 h-8 rounded-full mt-1"
              />
              <p className="text-base whitespace-pre-wrap">{showResult}</p>
            </div>
          </div>
        )}
      </div>

      {/* Input box fixed at the bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t z-10">
        <div className="max-w-[900px] mx-auto px-5 py-3">
          <div className="flex items-center justify-between gap-4 bg-gray-200 py-2 px-5 rounded-full">
            <input
              type="text"
              placeholder="Enter a prompt here..."
              className="flex-1 bg-transparent border-none outline-none p-2 text-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex gap-3 items-center">
              <MdAddPhotoAlternate className="text-2xl cursor-pointer" />
              <FaMicrophone className="text-2xl cursor-pointer" />
              <IoMdSend
                onClick={() => onSent(input)}
                className="text-2xl cursor-pointer"
              />
            </div>
          </div>
          <p className="text-sm mt-2 text-center font-medium text-slate-600">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

const SuggestionCard = ({ text, icon }) => (
  <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
    <p className="text-slate-700 text-lg">{text}</p>
    <div className="text-4xl p-1 absolute bottom-2 right-2 text-slate-600">
      {icon}
    </div>
  </div>
);

export default MainContent;
