import * as React from "react"
import type { ButtonProps } from "../../types/button"
import { Loader2 } from "lucide-react"
import { cn } from "../../utils/utils"
import { BUTTON_VARIANTS, BUTTON_SIZES, BUTTON_BASE } from "../../constants/atoms"



const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          BUTTON_BASE,
          BUTTON_VARIANTS[variant],
          BUTTON_SIZES[size],
          className
        )}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }