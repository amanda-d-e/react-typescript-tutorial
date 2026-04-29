import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from "./components/InputField";
import {Item} from "./components/model";
import ItemList from "./components/ItemList";
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
    const [item, setItem] = useState<string>("");
    const [items, setItems] = useState<Item[]>([]);

    const handleAdd= (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (item) {
            setItems([...items,{id:Date.now(), title:item, rank:0}]);
            setItem("");
        }

    }

    return(
      <div className={"App"}>
        <span className={"heading"}>Ranked</span>
          <InputField item={item} setItem={setItem} handleAdd={handleAdd}/>
          <ItemList items={items} setItems={setItems}/>
      </div>
    );
}

export default App;
