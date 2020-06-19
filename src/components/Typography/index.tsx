import React from "react";

import "./styles.scss";

export interface TypographyProps {
  /**
   * Typography variant
   *
   * @default h1
   **/
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "overline";
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "h1",
  children,
}) => {
  if (variant === "h1") return <h1 className="md-headline-1">{children}</h1>;
  if (variant === "h2") return <h1 className="md-headline-2">{children}</h1>;
  if (variant === "h3") return <h1 className="md-headline-3">{children}</h1>;
  if (variant === "h4") return <h1 className="md-headline-4">{children}</h1>;
  if (variant === "h5") return <h1 className="md-headline-5">{children}</h1>;
  if (variant === "h6") return <h1 className="md-headline-6">{children}</h1>;
  if (variant === "subtitle1")
    return <h1 className="md-headline-subtitle-1">{children}</h1>;
  if (variant === "subtitle2")
    return <h1 className="md-headline-subtitle-2">{children}</h1>;
  if (variant === "body1")
    return <h1 className="md-headline-body-1">{children}</h1>;
  if (variant === "body2")
    return <h1 className="md-headline-body-2">{children}</h1>;
  if (variant === "button")
    return <h1 className="md-headline-button">{children}</h1>;
  if (variant === "caption")
    return <h1 className="md-headline-caption">{children}</h1>;
  if (variant === "overline")
    return <h1 className="md-headline-overline">{children}</h1>;
  return <h1 className="md-headline-1">{children}</h1>;
};

export default Typography;
