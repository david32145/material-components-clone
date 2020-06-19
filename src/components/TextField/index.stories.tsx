import React from "react";

import TextField from "./index";

import { storiesOf } from "@storybook/react";

storiesOf("TextField", module).add("Simple TextField", () => (
  <TextField name="username" label="Label" />
));

storiesOf("TextField", module).add("With helper text", () => (
  <TextField name="username" label="Label" helperText="Helper message" />
));

storiesOf("TextField", module).add("With count words", () => (
  <TextField name="username" label="Label" showCountWords />
));

storiesOf("TextField", module).add("With left icon", () => (
  <TextField name="username" label="Email" leadingIcon="account_circle" />
));

storiesOf("TextField", module).add("With right icon", () => (
  <TextField name="pass" label="Password" trailingIcon="error_outline" />
));

storiesOf("TextField", module).add("Full input", () => (
  <TextField
    name="pass"
    label="Email"
    helperText="Helper message"
    showCountWords
    leadingIcon="account_circle"
    trailingIcon="error_outline"
  />
));
