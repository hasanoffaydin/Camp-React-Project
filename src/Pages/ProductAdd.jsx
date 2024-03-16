import React from 'react'
import { Field, Form, Formik,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button, FormField, Label } from 'semantic-ui-react'
import KodlamaIoTextInput from '../Utilities/CustomFormControls/KodlamaIoTextInput'
export default function ProductAdd() {
    const initialValues = {
        productName: "",
        unitPrice: ""
    }
    const schema = Yup.object({
        productName: Yup.string().required("Urun Adi Zorunlu"),
        unitPrice: Yup.number().required("Urun Fiyati Zorunlu")
    })
    return (
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                    values.preventDefault()
                }}
            >
                <Form className='ui form'>
                    <KodlamaIoTextInput name="productName" placeholder="Product Name"/>
                    <KodlamaIoTextInput name="unitPrice" placeholder="Unit Price"/>
                    
                    <Button color='blue' type='submit' basic> Product Add </Button>
                </Form>
            </Formik>
    )
}
