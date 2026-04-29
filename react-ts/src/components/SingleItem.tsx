import React, {useEffect, useRef, useState} from 'react'
import {Item} from "./model";
import "./styles.css"

interface Props {
    item:Item;
    items:Item[];
    setItems:React.Dispatch<React.SetStateAction<Item[]>>;

}

const SingleItem: React.FC<Props> = ({item,items,setItems}) => {
    const [edit,setEdit] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<string>(item.title);

    const handleEdit= (e:React.SyntheticEvent,id:number)=>{
        e.preventDefault();
        setItems(items.map((item) => (item.id === id ? {...item,title:editItem}:item))
        );
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleDelete= (id:number)=>{
        setItems(items.filter((item)=> item.id !== id))
    }
    return (
        <form className={"items_single"}
              onSubmit={(e)=>handleEdit(e,item.id)}>
            {
                edit ? (
                    <input value={editItem}
                           onChange={(e) =>setEditItem(e.target.value)}
                           className={"items_single-text"}
                           ref={inputRef}
                    />
                ): (
                    <span className={"items_single-text"}>{item.title}</span>
                )
            }

            <div>
                <button type={"button"}
                        className={"icon"}
                        onClick={() => {
                    if (!edit) {
                        setEdit(!edit)
                    }
                }}
                >Edit</button>
                <button type={"button"}
                        className={"icon"}
                        onClick={()=>handleDelete(item.id)}
                >Delete</button>
            </div>
        </form>
    )
}

export default SingleItem