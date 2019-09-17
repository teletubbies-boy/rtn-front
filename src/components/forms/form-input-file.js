import React, { Component } from "react";
import { Button, FormFeedback, FormGroup, Input, Label } from "reactstrap";


class InputFileField extends Component {
  adaptFileEventToValue = (delegate, name) => e =>
    delegate(name, e.target.files[0]);

  clearInput = () => {
    const { clearFileInput } = this.props;
    if (clearFileInput) clearFileInput();
  };

  render() {
    const {
      label,
      field: { value, name, onBlur, ...inputProps },
      form: { touched, errors },
      onChange,
      ...props
    } = this.props;
    const isError = touched[name] && errors[name];
    return (
      <FormGroup>
        {label && <Label for={`${inputProps.name}-${label}`}>{label}</Label>}
        <div className="row">
          <div className="col">
            <Input
              {...inputProps}
              {...props}
              type="file"
              id={`${inputProps.name}-${label}`}
              onChange={this.adaptFileEventToValue(onChange, name)}
              onBlur={this.adaptFileEventToValue(onBlur)}
              invalid={isError}
            />
          </div>
          {value && (
            <div className="col-auto">
              <Button
                color="link"
                className="text-danger p-0"
                onClick={this.clearInput}
              >
                {/* <ClearIcon /> */}
              </Button>
            </div>
          )}
        </div>
        {isError && <FormFeedback>{errors[name]}</FormFeedback>}
      </FormGroup>
    );
  }
}

export default InputFileField;
