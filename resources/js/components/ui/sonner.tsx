"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-base-100 group-[.toaster]:text-base-content group-[.toaster]:border-base-300 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-base-content/70",
          actionButton:
            "group-[.toast]:btn btn-primary",
          cancelButton:
            "group-[.toast]:btn btn-ghost",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
