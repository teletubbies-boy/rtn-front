import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

class InputDatePickerField extends Component {
  state = {
    selected: null
  };

  handleOnChange = e => {
    this.props.onChange(this.props.field.name, e);
    this.setState({ selected: e });
  };

  render() {
    const {
      field: { value, name },
      label,
      form: { touched, errors }
    } = this.props;
    let isError = touched[name] && errors[name];

    return (
      <div className="w-100">
        <label htmlFor="basic-url">{label}</label>
        <DatePicker
          {...this.props}
          selected={this.state.selected}
          id={`${name}-${label}`}
          value={value && moment(value).format("YYYY-MM-DD")}
          className={`form-control w-100 ${isError && "border border-danger"}`}
          onChange={this.handleOnChange}
        />
        {isError && <span className="text-danger">{errors[name]}</span>}
      </div>
    );
  }
}

export default InputDatePickerField;