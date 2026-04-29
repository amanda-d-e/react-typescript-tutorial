import React from 'react'
import "./styles.css"
import {Item} from "./model";
import SingleItem from "./SingleItem";

interface Props {
    items:Item[];
    setItems:React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemList: React.FC<Props> = ({items,setItems}) => {
    return(
        <div className={"items"}>
            {items.map(item=>(
                <SingleItem item={item}
                            key={item.id}
                            items={items}
                            setItems={setItems}
                />
            ))}
        </div>
    )
}

export default ItemList