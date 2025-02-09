import * as React from "react"
import { clsx } from "clsx"

const Alert = React.forwardRef(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={clsx(
      "relative w-full rounded-lg border p-4",
      {
        "bg-red-50 text-red-900 border-red-200": variant === "destructive",
        "bg-yellow-50 text-yellow-900 border-yellow-200": variant === "warning",
        "bg-green-50 text-green-900 border-green-200": variant === "success",
        "bg-gray-50 text-gray-900 border-gray-200": variant === "default",
      },
      className
    )}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertDescription }
