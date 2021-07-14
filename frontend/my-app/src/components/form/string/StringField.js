import { Fragment,useState } from "react"
import {Input, Label} from '../styles'

const StringField = (props) => {

    const [input,setInput] = useState(props.data.value)

    const checkInput = (e) => {
        props.pushNotification({ status: false, type: null, message: null })
        props.addEditedData(props.data.uid,e.target.value)
        const letters = /^[A-Za-z]+$/;
        if(!e.target.value.match(letters)) {
            props.pushNotification({ status: true, type: 'error', message: 'First or Last name must be letters' })
        } else {
            setInput(e.target.value)
        }
    }

    return (
        <Fragment>
             <Label htmlFor={props.data.label}>{props.data.label}</Label>
                   <Input id={props.data.label}
                       pattern="[a-zA-Z]*"
                       type="text"
                       value={input}
                       required={props.data._metadata?props.data._metadata.required:false}
                       onChange={checkInput}

                   />
        </Fragment>
    )
}

export default StringField