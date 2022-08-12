import "./styles.css";
import { useState } from "react";

export default function App() {
  /////  (1)paly input ko set krty hai
  //////(2) value={inputtext}
  //////(3)  input state ko change karty hai onChange={handleChange}  or y function banhty hai
  ////////(4)handleChange(event) y function bnahy hai or event sa us ki value change ki hai
  /////////(5)  map fuction banhy ak sa zahah item add ho  => const [item,SetItem]=useState([]) new state bnhi burron k ilhyyy
  ////////6    <button  onClick={Additem}> or is funcion banhy spread operator sa aghy or pechy wahli value create ki
  /////////(7)    input ko clear karnhy k ilhyy  SetInputtext("") wahlii state ko empty kih hai

  const [inputtext, SetInputtext] = useState("");
  const [item, SetItem] = useState([]);

  function Additem() {
    SetItem((preItem) => {
      return [...preItem, inputtext];
    });
    SetInputtext("");
  }
  function handleChange(event) {
    const newValue = event.target.value;
    SetInputtext(newValue);
  }

  return (
    <div className="Container">
      <div className="heading">
        <h1>To do list</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputtext} />
        <button onClick={Additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
