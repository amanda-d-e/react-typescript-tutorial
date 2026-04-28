import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from "./components/InputField";
/*
interface Item {
  title:string;
  rank:number;
}

interface TVShow extends Item{
  rating?:number; // ratings are optional
}
let items:Item[];

function printTitle(title:string){
  console.log(title);
}

printTitle("Nichijou");
*/

const App: React.FC = () => {
    const [items, setItems] = useState<string>("");

    return(
      <div className={"App"}>
        <span className={"heading"}>Ranked</span>
          <InputField items={items} setItems={setItems}/>
      </div>);
}

export default App;
