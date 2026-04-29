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
        <div className="container">
            <div className="items">
                <span className="item_heading">
                    Rankings
                </span>
                {
                    items.map((item)=> (
                        <SingleItem
                            item={item}
                            items={items}
                            key={item.id}
                            setItems={setItems}
                        />
                    ))
                }
            </div>
            <div className="items remove">
                <span className="item_heading">
                    Unranked
                </span>
                {
                    items.map((item)=> (
                        <SingleItem
                            item={item}
                            items={items}
                            key={item.id}
                            setItems={setItems}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList