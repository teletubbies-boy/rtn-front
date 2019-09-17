import React from "react";
import ReactDOM from "react-dom";
import app from "app";

import { I18nextProvider } from "react-i18next";
import i18n from "i18n"
const selector = document.querySelector("#app");

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <app />
    </I18nextProvider>, selector);

// npm install cross-env -g || yarn add -g cross-env
// yarn dev