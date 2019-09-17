import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class FormTextEditor extends Component {
  handleOnchage = value => {
    this.props.onChange(this.props.field.name, value);
  };

  render() {
    const {
      field,
      label,
      form: { touched, errors }
    } = this.props;
    let isError = touched[field.name] && errors[field.name];
    return (
      <div>
        <label htmlFor="basic-url">{label}</label>
        <CKEditor
          {...field}
          id={`-${label}`}
          editor={ClassicEditor}
          data={field.value}
          onChange={(event, editor) => {
            this.handleOnchage(editor.getData());
          }}
          onBlur={editor => this.handleOnchage(editor.getData(field.value))}
        />
        {isError && <span className="text-danger">{errors[field.name]}</span>}
      </div>
    );
  }
}

export default FormTextEditor;
