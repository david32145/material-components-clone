import React from "react";
import Typography from "./index";

import { storiesOf } from "@storybook/react";

storiesOf("Typography", module)
  .add("Headline 1", () => {
    return <Typography variant="h1">Simple Headline 1</Typography>;
  })
  .add("Headline 2", () => {
    return <Typography variant="h2">Simple Headline 2</Typography>;
  })
  .add("Headline 3", () => {
    return <Typography variant="h3">Simple Headline 3</Typography>;
  })
  .add("Headline 4", () => {
    return <Typography variant="h4">Simple Headline 4</Typography>;
  })
  .add("Headline 5", () => {
    return <Typography variant="h5">Simple Headline 5</Typography>;
  })
  .add("Headline 6", () => {
    return <Typography variant="h6">Simple Headline 6</Typography>;
  })
  .add("Subtitle 1", () => {
    return <Typography variant="subtitle1">Simple subtitle 1</Typography>;
  })
  .add("Subtitle 2", () => {
    return <Typography variant="subtitle2">Simple subtitle 2</Typography>;
  })
  .add("Body 1", () => {
    return <Typography variant="body1">Simple Body 1</Typography>;
  })
  .add("Body 2", () => {
    return <Typography variant="body2">Simple Body 2</Typography>;
  })
  .add("Button", () => {
    return <Typography variant="button">Simple button text</Typography>;
  })
  .add("Caption", () => {
    return <Typography variant="caption">Simple caption text</Typography>;
  })
  .add("Overline", () => {
    return <Typography variant="overline">Simple overline text</Typography>;
  });
