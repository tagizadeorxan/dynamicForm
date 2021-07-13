import { useEffect, useState } from "react"
import { GET, POST } from '../../requests/axios';
import NumberField from "./number";
import StringField from "./string";
import { FormDesign } from "./styles"

const Form = () => {

    const [data, setData] = useState([])
    const [editedData, setEditedData] = useState([{id:1,value:'changed'}])

    const submitForm = (e) => {
        e.preventDefault()
        POST('data',editedData).then( res => alert("successfully changed"))
    }

    const addEditedData = (id, value) => {
        let result = editedData.filter(e => e.id !== id)
        result.push({ id, value })
        setEditedData(result)
    }

    useEffect(() => {
        GET('data').then(res => {
            if (res) {
                let inputData = []
                const getInputs = (arr) => {
                    arr.forEach(e => {
                        if (e.data_type === 'group') {
                            getInputs(e.value)
                        } else {
                            inputData.push(e)
                        }
                    })
                    return inputData
                }

                let result = getInputs(res.data.data)
                setData(result)
            }
        })

    }, [setData])

    return (
        <FormDesign onSubmit={submitForm}>

            {data.length > 0 ? data.map(e => {
                if (e.data_type === 'string') {
                    return <StringField addEditedData={addEditedData} key={e.uid} data={e} required={e._metadata.required} />
                } else if (e.data_type === 'number') {
                    return <NumberField addEditedData={addEditedData} key={e.uid} data={e} required={e._metadata.required} />
                } return <p key={e.uid}></p>
            }) : 'loading..'}

            <button type="submit">Submit</button>

        </FormDesign>
    )
}

export default Form