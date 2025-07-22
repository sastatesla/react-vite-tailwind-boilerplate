//card.tsx
export const CARD_BASE = "w-full max-w-2xl mt-3 rounded-lg border bg-card text-card-foreground shadow-sm";
export const CARD_HEADER = "flex flex-col space-y-1 ";
export const CARD_TITLE = "text-2xl font-semibold leading-none tracking-tight ";
export const CARD_DESCRIPTION = "text-sm text-muted-foreground mt-2 ";
export const CARD_CONTENT = "p-6 pt-0";

//OtpInput.tsx
export const OTP_INPUT_BASE = "h-12 w-12 rounded-md border border-orange-500 bg-background text-center text-xl ring-offset-background focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-600 disabled:cursor-not-allowed disabled:opacity-50";
export const OTP_INPUT_DISABLED = "opacity-50 cursor-not-allowed";

//inputField.tsx
export const INPUT_BASE = "flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-2 ";
export const INPUT_ERROR = "border-destructive ";
export const LABEL_BASE = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70  ";
export const ERROR_TEXT = "text-sm font-medium text-destructive";
export const CONTAINER_BASE = "space-y-2";

// button.ts
export const BUTTON_VARIANTS = {
  default: "bg-orange-600 text-white hover:bg-orange-600/90",
  destructive: "bg-red-600 text-white hover:bg-red-600/90",
  outline: "border border-input hover:bg-orange-50 hover:text-orange-800",
  secondary: "bg-orange-100 text-orange-800 hover:bg-orange-100/80",
  ghost: "hover:bg-orange-50 hover:text-orange-800",
  link: "underline-offset-4 hover:underline text-orange-600",
} as const;

export const BUTTON_SIZES = {
  default: "h-10 py-2 px-4",
  sm: "h-9 px-3 rounded-md",
  lg: "h-11 px-8 rounded-md",
} as const;

export const BUTTON_BASE = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

// loading spinner sizes
export const LOADING_SPINNER_SIZES = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
} as const;
