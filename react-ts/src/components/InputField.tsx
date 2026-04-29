import React, {useRef} from 'react'
import "./styles.css"

interface Props {
    item:string;
    setItem:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.SyntheticEvent) => void;
}

const InputField:React.FC<Props> = ({item, setItem, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className={"input"}
              onSubmit={(e) => {
                  handleAdd(e);
                  inputRef.current?.blur();
              }}>
            <input type={"input"}
                   value={item}
                   onChange={(e) => setItem(e.target.value)}
                   placeholder={"Enter an item"} className={"input_box"}/>
            <button className={"input_submit"} type={"submit"}>Add</button>
        </form>
    )
}

export default InputField