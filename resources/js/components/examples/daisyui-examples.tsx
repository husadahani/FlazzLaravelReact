import React from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function DaisyUIExamples() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedTheme, setSelectedTheme] = React.useState("light")

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">DaisyUI Components Examples</h1>
      
      {/* Collapsible Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Collapsible Component</h2>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="collapse-title text-xl font-medium">
            Klik untuk membuka/menutup konten
          </CollapsibleTrigger>
          <CollapsibleContent className="collapse-content">
            <div className="p-4 bg-base-200 rounded-box">
              <p className="text-base-content">
                Ini adalah konten yang dapat di-collapse menggunakan DaisyUI styling.
                Komponen ini menggunakan class DaisyUI seperti <code>collapse</code>, <code>collapse-arrow</code>,
                dan <code>bg-base-100</code> untuk styling yang konsisten dengan tema DaisyUI.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Carousel Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Carousel Component</h2>
        <div className="relative">
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="bg-primary text-primary-content p-8 rounded-box text-center">
                  <h3 className="text-xl font-bold">Slide 1</h3>
                  <p>Ini adalah slide pertama dari carousel</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-secondary text-secondary-content p-8 rounded-box text-center">
                  <h3 className="text-xl font-bold">Slide 2</h3>
                  <p>Ini adalah slide kedua dari carousel</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-accent text-accent-content p-8 rounded-box text-center">
                  <h3 className="text-xl font-bold">Slide 3</h3>
                  <p>Ini adalah slide ketiga dari carousel</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Aspect Ratio Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Aspect Ratio Component</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-primary to-secondary">
            <div className="flex items-center justify-center text-primary-content">
              <div className="text-center">
                <h3 className="text-xl font-bold">16:9 Aspect Ratio</h3>
                <p>Perfect for videos and hero images</p>
              </div>
            </div>
          </AspectRatio>
          
          <AspectRatio ratio={4 / 3} className="bg-gradient-to-br from-accent to-info">
            <div className="flex items-center justify-center text-accent-content">
              <div className="text-center">
                <h3 className="text-xl font-bold">4:3 Aspect Ratio</h3>
                <p>Great for photos and cards</p>
              </div>
            </div>
          </AspectRatio>
        </div>
      </div>

      {/* Toggle Group Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Toggle Group Component</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-base-content/70 mb-2">Pilih tema:</p>
            <ToggleGroup 
              type="single" 
              value={selectedTheme} 
              onValueChange={(value) => value && setSelectedTheme(value)}
              className="justify-start"
            >
              <ToggleGroupItem value="light">Light</ToggleGroupItem>
              <ToggleGroupItem value="dark">Dark</ToggleGroupItem>
              <ToggleGroupItem value="cupcake">Cupcake</ToggleGroupItem>
              <ToggleGroupItem value="synthwave">Synthwave</ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <div>
            <p className="text-sm text-base-content/70 mb-2">Pilih ukuran:</p>
            <ToggleGroup type="multiple" className="justify-start">
              <ToggleGroupItem value="xs">XS</ToggleGroupItem>
              <ToggleGroupItem value="sm">SM</ToggleGroupItem>
              <ToggleGroupItem value="md">MD</ToggleGroupItem>
              <ToggleGroupItem value="lg">LG</ToggleGroupItem>
              <ToggleGroupItem value="xl">XL</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>

      {/* Combined Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Combined Example</h2>
        <Collapsible>
          <CollapsibleTrigger className="collapse-title text-xl font-medium bg-primary text-primary-content">
            Lihat Galeri Foto dengan Carousel
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-primary to-secondary">
                    <div className="flex items-center justify-center text-primary-content">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold">Foto 1</h3>
                        <p>Landscape view dengan aspect ratio 16:9</p>
                      </div>
                    </div>
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={4 / 3} className="bg-gradient-to-br from-secondary to-accent">
                    <div className="flex items-center justify-center text-secondary-content">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold">Foto 2</h3>
                        <p>Portrait view dengan aspect ratio 4:3</p>
                      </div>
                    </div>
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={1 / 1} className="bg-gradient-to-br from-accent to-info">
                    <div className="flex items-center justify-center text-accent-content">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold">Foto 3</h3>
                        <p>Square view dengan aspect ratio 1:1</p>
                      </div>
                    </div>
                  </AspectRatio>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}