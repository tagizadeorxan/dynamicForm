import { Fragment } from "react"
import {Input, Label} from '../styles'

const NumberField = (props) => {
    return (
        <Fragment>
             <Label htmlFor={props.data.label}>{props.data.label}</Label>
                   <Input id={props.data.label}
                       type="number"
                       defaultValue={props.data.value}
                       required={props.data._metadata?props.data._metadata.required:false}
                   />
        </Fragment>
    )
}

export default NumberField