import React from 'react'
import { useField } from 'formik'
import { FormField,Label } from 'semantic-ui-react'

export default function KodlamaIoTextInput({...props}) {
    //console.log(props)
    //reflect api
    const [field,meta] = useField(props)
    //console.log(meta)

    return (
        <FormField error={meta.touched && !!meta.error}>
           <input {...field} {...props} />
           {meta.touched && !!meta.error ? ( //metin varsa true yoksa false yap  demek ünlem işareti -> !!
                <Label pointing basic color="red" content={meta.error}></Label>
           ):null}
        </FormField>
    )
}