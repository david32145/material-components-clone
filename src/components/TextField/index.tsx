import React, { useRef, useState } from "react";

import "./styles.scss";
import Typography from "../Typography";

type InputTextProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export interface TextFieldProps {
  /**
   * Input text props
   *
   * @default undefined
   */
  inputProps?: InputTextProps;
  /**
   * Name of input
   */
  name: string;
  /**
   * Icon align to left
   *
   * @default undefined
   */
  leadingIcon?: string;
  /**
   * Icon align to rigth
   *
   * @default undefined
   */
  trailingIcon?: string;
  /**
   * Label for input
   */
  label: string;
  /**
   * Helper text for input
   *
   * @default undefined
   */
  helperText?: string;
  /**
   * If true show the count words
   *
   * @default false
   */
  showCountWords?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  inputProps,
  name,
  leadingIcon,
  trailingIcon,
  label,
  helperText,
  showCountWords = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [countWords, setCountWords] = useState<string>("0 / 20");
  function handleFocus() {
    containerRef.current?.classList.remove("md-text-field-span-active");
    containerRef.current?.classList.add("md-text-field-active");
  }

  function handleBlur() {
    if (inputRef.current?.value.length) {
      containerRef.current?.classList.replace(
        "md-text-field-active",
        "md-text-field-span-active"
      );
    } else {
      containerRef.current?.classList.remove("md-text-field-active");
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setCountWords(`${event.target.value.length} / 20`);
  }

  return (
    <div ref={containerRef} className="md-text-field">
      <div className="wrapper">
        {leadingIcon && (
          <i className="material-icons leading-icon">{leadingIcon}</i>
        )}
        <div
          onClick={() => {
            inputRef.current?.focus();
          }}
          className="text-field"
        >
          <div />
          <input
            ref={inputRef}
            type="text"
            name={name}
            {...inputProps}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Typography
            onClick={() => {
              inputRef.current?.focus();
            }}
            variant="caption"
          >
            {label}
          </Typography>
        </div>
        {trailingIcon && (
          <i className="material-icons trailing-icon">{trailingIcon}</i>
        )}
        <div className="line" />
      </div>
      <div className="footer">
        <Typography variant="caption">{helperText}</Typography>
        {showCountWords && (
          <Typography variant="caption">{countWords}</Typography>
        )}
      </div>
    </div>
  );
};

export default TextField;
