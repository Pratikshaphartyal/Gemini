import { createContext, useState } from "react";
import run from "../config/gemini";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [prevPrompt, setprevPrompt] = useState([]);
  const [showResult, setshowResult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setResultData] = useState("");
  const onSent = async (prompt) => {
    setResultData("");
    setloading(true);
    setshowResult(true);
    setrecentPrompt(input);
    const response = await run(prompt);
    setshowResult(response);
    setloading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setrecentPrompt,
    prevPrompt,
    setprevPrompt,
    showResult,

    loading,
    resultData,
    onSent,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
