import * as React from "react"
import { cn } from "../../utils/utils"
import type { FormFieldProps } from "../../types/formField";
import { INPUT_BASE, INPUT_ERROR, LABEL_BASE, ERROR_TEXT, CONTAINER_BASE } from "../../constants/atoms";

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      className,
      containerClassName,
      label,
      error,
      type = "text",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId()

    return (
      <div className={cn(CONTAINER_BASE, containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={LABEL_BASE}
          >
            {label}
            {props.required && <span className="text-destructive ml-1 ">*</span>}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(
            INPUT_BASE,
            error && INPUT_ERROR,
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className={ERROR_TEXT}>{error}</p>
        )}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField }