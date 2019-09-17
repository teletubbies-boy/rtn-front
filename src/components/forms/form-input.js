import React, { Component } from 'react'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap'

class InputField extends Component {
    render () {
        const {
            field,
            label,
            form: {
                touched,
                error
            }
        } = this.props
        const isError = (touched && error)
        return (
            <FormGroup >
                {label && <Label for={`${field.name}-${label}`}>{label}</Label>}
                <Input {...field} {...this.props} id={`${field.name}-${label}`} invalid={isError} />
                {isError && <FormFeedback>{error}</FormFeedback>}
            </FormGroup>
        )
    }
}

export default InputField
