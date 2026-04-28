import React from 'react'
import "./styles.css"

interface Props {
    items:string;
    setItems:React.Dispatch<React.SetStateAction<string>>;
}

const InputField:React.FC<Props> = ({items, setItems}) => {
    return (
        <form className={"input"}>
            <input type={"input"}
                   value={items} onChange={(e) => setItems(e.target.value)}
                   placeholder={"Enter an item"} className={"input_box"}/>
            <button className={"input_submit"} type={"submit"}>Add</button>
        </form>
    )
}

export default InputField