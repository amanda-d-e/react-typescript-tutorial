import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField";
import {Item} from "./components/model";
import ItemList from "./components/ItemList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
    const [item, setItem] = useState<string>("");
    const [items, setItems] = useState<Item[]>([]);

    const [unrankedItems, setUnrankedItems] = useState<Item[]>([])

    const handleAdd= (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (item) {
            setItems([...items,{id:Date.now(), title:item, rank:0}]);
            setItem("");
        }

    }

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) return;

        let active = [...items];
        let complete = [...unrankedItems];

        let add: Item | undefined;

        if (source.droppableId === "RankedItemsID") {
            add = active[source.index];
            active.splice(source.index, 1);
        } else {
            add = complete[source.index];
            complete.splice(source.index, 1);
        }

        if (!add) return;

        if (destination.droppableId === "RankedItemsID") {
            active.splice(destination.index, 0, add);
        } else {
            complete.splice(destination.index, 0, add);
        }

        setItems(active);
        setUnrankedItems(complete);
    };

    return(
        <DragDropContext onDragEnd={onDragEnd}>
        <div className={"App"}>
          <span className={"heading"}>Ranked</span>
          <InputField item={item}
                      setItem={setItem}
                      handleAdd={handleAdd}
          />
          <ItemList items={items}
                    setItems={setItems}
                    unrankedItems={unrankedItems}
                    setUnrankedItems={setUnrankedItems}
          />
        </div>
        </DragDropContext>

    );
}

export default App;
