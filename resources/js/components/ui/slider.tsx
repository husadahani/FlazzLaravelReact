import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "range range-primary w-full",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="range-track">
      <SliderPrimitive.Range className="range-selection" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="range-thumb" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
