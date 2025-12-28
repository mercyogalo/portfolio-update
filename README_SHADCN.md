# shadcn/ui Setup Complete

shadcn/ui has been successfully installed and configured in your project!

## What's Been Set Up

1. **Dependencies Installed:**
   - `class-variance-authority` - For component variants
   - `clsx` - For conditional class names
   - `tailwind-merge` - For merging Tailwind classes
   - `tailwindcss-animate` - For animations

2. **Configuration Files:**
   - `components.json` - shadcn/ui configuration
   - `tailwind.config.js` - Updated with shadcn/ui theme
   - `src/index.css` - Added CSS variables for theming
   - `src/lib/utils.ts` - Created `cn()` utility function
   - `vite.config.ts` - Added path aliases (@/*)
   - `tsconfig.app.json` - Added path aliases support

3. **Path Aliases:**
   - `@/components` → `./src/components`
   - `@/lib` → `./src/lib`
   - `@/components/ui` → `./src/components/ui`
   - `@/hooks` → `./src/hooks`

## How to Use

### Adding Components

To add shadcn/ui components, use the CLI:

```bash
pnpm dlx shadcn@latest add [component-name]
```

For example:
```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add dialog
```

### Using the `cn()` Utility

Import and use the `cn()` utility for conditional classes:

```tsx
import { cn } from '@/lib/utils';

function MyComponent({ className, variant }) {
  return (
    <div className={cn(
      "base-classes",
      variant === "primary" && "primary-classes",
      className
    )}>
      Content
    </div>
  );
}
```

### Using Components

Components will be added to `src/components/ui/` and can be imported like:

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
```

## Available Components

Visit [shadcn/ui](https://ui.shadcn.com/docs/components) to see all available components.

## Customization

The theme colors are defined in `src/index.css` using CSS variables. You can customize them to match your burgundy and black color scheme.

