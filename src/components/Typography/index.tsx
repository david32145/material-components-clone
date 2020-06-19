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
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "h1",
  onClick,
  children,
}) => {
  if (variant === "h1") return <h1 className="md-headline-1">{children}</h1>;
  if (variant === "h2") return <h2 className="md-headline-2">{children}</h2>;
  if (variant === "h3") return <h3 className="md-headline-3">{children}</h3>;
  if (variant === "h4") return <h4 className="md-headline-4">{children}</h4>;
  if (variant === "h5") return <h5 className="md-headline-5">{children}</h5>;
  if (variant === "h6") return <h6 className="md-headline-6">{children}</h6>;
  if (variant === "subtitle1")
    return <p className="md-headline-subtitle-1">{children}</p>;
  if (variant === "subtitle2")
    return <p className="md-headline-subtitle-2">{children}</p>;
  if (variant === "body1")
    return <p className="md-headline-body-1">{children}</p>;
  if (variant === "body2")
    return <p className="md-headline-body-2">{children}</p>;
  if (variant === "button")
    return (
      <span onClick={onClick} className="md-headline-button">
        {children}
      </span>
    );
  if (variant === "caption")
    return (
      <span onClick={onClick} className="md-headline-caption">
        {children}
      </span>
    );
  if (variant === "overline")
    return (
      <span onClick={onClick} className="md-headline-overline">
        {children}
      </span>
    );
  return <h1 className="md-headline-1">{children}</h1>;
};

export default Typography;
