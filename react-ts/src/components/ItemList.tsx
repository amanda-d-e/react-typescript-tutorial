import React from 'react'
import "./styles.css"
import {Item} from "./model";
import SingleItem from "./SingleItem";
import { Droppable } from "react-beautiful-dnd";

interface Props {
    items:Item[];
    setItems:React.Dispatch<React.SetStateAction<Item[]>>;
    unrankedItems:Item[];
    setUnrankedItems:React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemList: React.FC<Props> = ({items,setItems,unrankedItems,setUnrankedItems}) => {
    return(
        <div className="container">
            <Droppable droppableId={"RankedItemsID"}>
                {(provided, snapshot) => (
                <div className={`items ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                     ref={provided.innerRef}
                     {...provided.droppableProps}>
                    <span className="items_heading">
                        Rankings
                    </span>
                    {items?.map((item,index)=> (
                        <SingleItem
                            index={index}
                            item={item}
                            items={items}
                            key={item.id}
                            setItems={setItems}
                        />
                    ))}
                    {provided.placeholder}
                </div>)}
            </Droppable>
            <Droppable droppableId={"UnRankedItemsID"}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`items  ${
                            snapshot.isDraggingOver ? "dragcomplete" : "remove"
                        }`}
                    >
                        <span className="items_heading">
                            Unranked
                        </span>
                        {unrankedItems?.map((item,index)=> (
                            <SingleItem
                                index={index}
                                item={item}
                                items={unrankedItems}
                                key={item.id}
                                setItems={setUnrankedItems}
                            />
                        ))}
                        {provided.placeholder}
                    </div>)}
            </Droppable>
        </div>
    )
}

export default ItemList