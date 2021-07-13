import { Fragment } from "react"
import {Input, Label} from '../styles'

const StringField = (props) => {
    return (
        <Fragment>
             <Label htmlFor={props.data.label}>{props.data.label}</Label>
                   <Input id={props.data.label}
                       pattern="[a-zA-Z]*"
                       type="text"
                       defaultValue={props.data.value}
                       required={props.data._metadata?props.data._metadata.required:false}
                       onChange={(e)=>props.addEditedData(props.data.uid,e.target.value)}

                   />
        </Fragment>
    )
}

export default StringField