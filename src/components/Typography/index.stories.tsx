import React from "react";
import Typography from "./index";

import { storiesOf } from "@storybook/react";

storiesOf("Typography", module).add("Headline 1", () => {
  return <Typography>Headline 1</Typography>;
});
