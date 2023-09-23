import React , {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


export default function App() {

const [appClass, setAppClass] = useState("App dark");
const [appMode, setAppMode] = useState("Dark");
const handleClick = () => {
  if (appClass === "App dark") {
    setAppClass("App light");
    setAppMode("Light");
  } else {
    setAppClass("App dark");
    setAppMode("Dark");
  }
}
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{appMode} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}


