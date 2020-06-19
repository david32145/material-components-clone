import React, { useRef } from "react";

import "./styles.scss";
import Typography from "../Typography";

type InputTextProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export interface TextFieldProps {
  inputProps?: InputTextProps;
}

export const TextField: React.FC<TextFieldProps> = ({ inputProps }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleFocus() {
    containerRef.current?.classList.add("md-text-field-active");
  }

  function handleBlur() {
    containerRef.current?.classList.remove("md-text-field-active");
  }

  return (
    <div ref={containerRef} className="md-text-field">
      <div className="wrapper">
        <i className="material-icons leading-icon">favorite</i>
        <div className="text-field">
          <div />
          <input
            ref={inputRef}
            type="text"
            {...inputProps}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Typography variant="caption">Label</Typography>
        </div>
        <i className="material-icons trailing-icon">visibility</i>
        <div className="line" />
      </div>
      <div className="footer">
        <span>Helper message</span>
        <span>0 / 20</span>
      </div>
    </div>
  );
};

export default TextField;
