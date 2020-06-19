import React from "react";

import TextField from "./index";

import { storiesOf } from "@storybook/react";

storiesOf("TextField", module).add("Simple TextField", () => (
  <TextField name="username" label="Label" />
));
