import * as React from "react"
import { cn } from "../../utils/utils"

import type { OTPInputProps } from "../../types/otpInput";
import { OTP_INPUT_BASE, OTP_INPUT_DISABLED } from "../../constants/atoms";

const OTPInput = React.forwardRef<HTMLDivElement, OTPInputProps>(
  (
    {
      className,
      value = "",
      onChange,
      length = 6,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const newValue = e.target.value
      if (newValue.match(/[^0-9]/)) return

      const updatedValue = value.split("")
      updatedValue[index] = newValue[newValue.length - 1] || ""
      onChange(updatedValue.join(""))

      // Auto focus next input
      if (newValue && index < length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`)
        if (nextInput) nextInput.focus()
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === "Backspace" && !value[index] && index > 0) {
        const prevInput = document.getElementById(`otp-input-${index - 1}`)
        if (prevInput) prevInput.focus()
      }
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center gap-2", className)}
        {...props}
      >
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={disabled}
            className={cn(
              OTP_INPUT_BASE,
              disabled && OTP_INPUT_DISABLED
            )}
          />
        ))}
      </div>
    )
  }
)
OTPInput.displayName = "OTPInput"

export { OTPInput }