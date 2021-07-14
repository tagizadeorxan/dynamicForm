import { useEffect, useState } from "react"
import { GET, POST } from '../../requests/axios';
import NumberField from "./number";
import StringField from "./string";
import { FormDesign, FormGroup, Button } from "./styles"
import Notification from "../other/notification"

const Form = () => {

    const [data, setData] = useState({})
    const [editedData, setEditedData] = useState([{ id: 1, value: 'changed' }])
    const [notification, setNotification] = useState({ status: false, type: null, message: null })

    const pushNotification = (notification) => {
        setNotification(notification)
    }


    const submitForm = (e) => {
        e.preventDefault()
        POST('data', editedData).then(res => alert("successfully changed"))
    }

    const addEditedData = (id, value) => {
        let result = editedData.filter(e => e.id !== id)
        result.push({ id, value })
        setEditedData(result)
    }

    useEffect(() => {
        GET('data').then(res => {
            if (res) {
                let inputData = { Basic: [] }
                let type = 'Basic'
                const getInputs = (arr) => {

                    arr.forEach(e => {
                        if (e.data_type === 'group') {
                            type = e.label
                            inputData[type] = []
                            getInputs(e.value)
                        } else {

                            inputData[type].push(e)
                        }
                    })
                    return inputData
                }

                console.log(inputData)

                let result = getInputs(res.data.data)
                setData(result)
            }
        })

    }, [setData])




    return (
        <FormDesign onSubmit={submitForm}>
            {notification.status ? <Notification type={notification.type}>{notification.message}</Notification> : null}
            {data.Basic && data.Basic.length > 0 ?
                Object.keys(data).map(function (key, index) {
                    return <FormGroup key={index}>
                        <div className="header">
                            <h5>{key}</h5>
                        </div>

                        {
                            data[key].map(e => {
                                if (e.data_type === 'string') {
                                    return <StringField pushNotification={pushNotification} addEditedData={addEditedData} key={e.uid} data={e} required={e._metadata.required} />
                                } else if (e.data_type === 'number') {
                                    return <NumberField pushNotification={pushNotification} addEditedData={addEditedData} key={e.uid} data={e} required={e._metadata.required} />
                                } return <p key={e.uid}></p>
                            })
                        }
                    </FormGroup>
                }) : 'loading..'}

            <Button type="submit">Submit</Button>

        </FormDesign>
    )
}

export default Form