import React, { Component } from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";

class SelectField extends Component {
  componentDidMount() {
    this.setInputValue();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.setInputValue();
  }

  setInputValue = () => {
    const { field, options, getOptionValue } = this.props;

    if (field.value && typeof field.value !== "object") {
      const objectValue = options.find(option => {
        const optionValue =
          typeof getOptionValue === "function"
            ? getOptionValue(option)
            : option.value;
        return optionValue === field.value;
      });
      field.onChange(objectValue);
    }
  };

  render() {
    const {
      field :{name, value},
      label,
      field,
      form: { touched, errors }
    } = this.props;
    const isError = touched && errors[name];
    const customStyles = {
      control: (base, state) => ({
        ...base,
        borderColor: state.isFocused
          ? "#e9ecef"
          : isError
          ? "#fa5838"
          : "#e9ecef",
        "&:hover": {
          borderColor: state.isFocused
            ? "#e9ecef"
            : isError
            ? "#fa5838"
            : "#e9ecef"
        }
      })
    };
    return (
      <FormGroup>
        {label && <Label for={`${name}-${label}`}>{label}</Label>}
        <Select
          {...field}
          {...this.props}
          id={`${name}-${label}`}
          styles={customStyles}
          onBlur={() => field.onBlur(field.value)}
        />
        {isError && (
          <FormFeedback className="d-block" invalid>
            {errors[name]}
          </FormFeedback>
        )}
      </FormGroup>
    );
  }
}

export default SelectField;
