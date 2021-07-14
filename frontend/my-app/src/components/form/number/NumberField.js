import { Fragment, useState } from "react"
import { Input, Label } from '../styles'


const NumberField = (props) => {

    const [input, setInput] = useState(props.data.value)

    const checkInput = (e) => {
        props.addEditedData(props.data.uid,e.target.value)
        props.pushNotification({ status: false, type: null, message: null })
        if (Number(e.target.value) < 1 || isNaN(e.target.value)) {
            setInput(props.data.value)
        } else {
            if (props.data.label.toLowerCase() === 'age') {
                if (Number(e.target.value) <= 150) {
                    setInput(e.target.value)
                } else {
                    props.pushNotification({ status: true, type: 'error', message: 'Age can not be more than 150' })
                }
            } else {
                setInput(e.target.value)
            }

        }
    }

    return (
        <Fragment>
            <Label htmlFor={props.data.label}>{props.data.label}</Label>
            <Input id={props.data.label}
                pattern="^[0-9]+$"
                type="number"
                min="0"
                value={input}
                onChange={checkInput}
                required={props.data._metadata ? props.data._metadata.required : false}
            />
        </Fragment>
    )
}

export default NumberField