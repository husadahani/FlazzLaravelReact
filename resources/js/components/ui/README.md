# DaisyUI Components Implementation

Dokumentasi ini menjelaskan implementasi komponen-komponen UI yang telah diintegrasikan dengan DaisyUI untuk memberikan styling yang konsisten dan modern.

## Komponen yang Tersedia

### 1. Collapsible

Komponen collapsible yang menggunakan DaisyUI styling dengan class `collapse`, `collapse-arrow`, dan `collapse-title`.

**Fitur:**
- Menggunakan Radix UI untuk aksesibilitas
- Styling DaisyUI dengan tema yang konsisten
- Animasi smooth untuk membuka/menutup
- Icon chevron yang berotasi

**Penggunaan:**
```tsx
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

<Collapsible>
  <CollapsibleTrigger>
    Klik untuk membuka
  </CollapsibleTrigger>
  <CollapsibleContent>
    Konten yang dapat di-collapse
  </CollapsibleContent>
</Collapsible>
```

**DaisyUI Classes yang Digunakan:**
- `collapse` - Base class untuk komponen collapse
- `collapse-arrow` - Menambahkan arrow indicator
- `collapse-title` - Styling untuk trigger
- `collapse-content` - Styling untuk konten
- `bg-base-100` - Background color dari tema
- `border border-base-300` - Border styling

### 2. Carousel

Komponen carousel yang terintegrasi dengan Embla Carousel dan DaisyUI styling.

**Fitur:**
- Navigasi dengan tombol prev/next
- Responsive design
- Keyboard navigation support
- DaisyUI button styling

**Penggunaan:**
```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

**DaisyUI Classes yang Digunakan:**
- `carousel` - Base class untuk carousel
- `carousel-center` - Center alignment
- `carousel-item` - Individual slide styling
- `carousel-content` - Content container
- `btn btn-circle btn-primary` - Navigation buttons
- `bg-base-100` - Background styling

### 3. Aspect Ratio

Komponen untuk mengatur aspect ratio dengan styling DaisyUI.

**Fitur:**
- Flexible aspect ratios (16:9, 4:3, 1:1, dll)
- Responsive design
- DaisyUI background styling

**Penggunaan:**
```tsx
import { AspectRatio } from "@/components/ui/aspect-ratio"

<AspectRatio ratio={16 / 9}>
  <img src="/image.jpg" alt="Image" />
</AspectRatio>
```

**DaisyUI Classes yang Digunakan:**
- `aspect-w-16 aspect-h-9` - Aspect ratio utilities
- `bg-base-200` - Background color
- `rounded-box` - Rounded corners

### 4. Toggle Group

Komponen toggle group dengan styling DaisyUI button group.

**Fitur:**
- Single atau multiple selection
- DaisyUI button group styling
- Responsive design

**Penggunaan:**
```tsx
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

<ToggleGroup type="single" value={value} onValueChange={setValue}>
  <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
  <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
</ToggleGroup>
```

**DaisyUI Classes yang Digunakan:**
- `btn-group` - Button group container
- Menggunakan `toggleVariants` yang sudah terintegrasi dengan DaisyUI button classes

## Tema dan Customization

Semua komponen menggunakan DaisyUI theme system yang dapat dikustomisasi melalui:

1. **Theme Configuration** di `tailwind.config.js`:
```js
daisyui: {
  themes: ["light", "dark", "cupcake", "synthwave", ...],
  darkTheme: "dark",
}
```

2. **CSS Variables** di `app.css` untuk custom colors

3. **Class Override** dengan menambahkan className prop

## Dependencies

- `@radix-ui/react-*` - Untuk aksesibilitas dan functionality
- `embla-carousel-react` - Untuk carousel functionality
- `daisyui` - Untuk styling framework
- `tailwindcss` - CSS framework base
- `clsx` & `tailwind-merge` - Untuk utility class merging

## Contoh Penggunaan Lengkap

Lihat file `daisyui-examples.tsx` untuk contoh penggunaan lengkap dari semua komponen dengan berbagai kombinasi dan styling.