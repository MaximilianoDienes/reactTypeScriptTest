import { useNewSubForm } from "../hooks/useNewSubForm"
import { Sub } from "../types"

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(inputValues);
        handleClear()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({
            type: "change_value",
            payload: {
                inputName: e.target.name,
                inputValue: e.target.value
            }
        })
    }

    const handleClear = () => {
        dispatch({
            type: "clear"
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputValues.nick} name="nick" placeholder="nick"></input>
                <input type="number" onChange={handleChange} value={inputValues.subMonths} name="subMonths" placeholder="subMonths"></input>
                <input type="text" onChange={handleChange} value={inputValues.avatar} name="avatar" placeholder="avatar"></input>
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description"></textarea>
                <button type="button" onClick={handleClear}>Limpiar el formulario</button>
                <button type="submit">Guardar nuevo subscriptor!</button>
            </form>
        </div>
    )
}

export default Form