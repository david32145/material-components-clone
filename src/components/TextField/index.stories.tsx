import React from "react";

import TextField from "./index";

import { storiesOf } from "@storybook/react";

storiesOf("TextField", module).add("Simple TextField", () => (
  <TextField>OK</TextField>
));
