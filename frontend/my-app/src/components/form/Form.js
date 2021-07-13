import { useEffect, useState } from "react"
import { GET } from '../../requests/axios';
import NumberField from "./number";
import StringField from "./string";
import { FormDesign } from "./styles"

const Form = () => {

    const [data, setData] = useState([])



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
        <FormDesign>

            {data.length > 0 ? data.map(e => {
                if (e.data_type === 'string') {
                    return <StringField key={e.uid} data={e} />       
                } else if (e.data_type === 'number') {
                    return <NumberField key={e.uid} data={e} />
                } return <p></p>
            }


            ) : 'loading..'}

        </FormDesign>
    )
}

export default Form