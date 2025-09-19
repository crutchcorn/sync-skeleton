# 🔄 Sync Skeleton for React ⚛️

A modern skeleton loader that supports syncing multiple elements' loading indicator at the same time.

![A skeleton loader with a line going through multiple elements at the same time despite different widths](https://raw.githubusercontent.com/crutchcorn/sync-skeleton/refs/heads/main/media/skeleton.gif)

## Installation

The only prerequisite to using this package is the CSS file. Import it in your project via TypeScript:

```typescript
// Required for usage
import '@sync-skeleton/core/skeleton.css'
```

Or via HTML:

```html
<link rel="stylesheet" href="node_modules/@sync-skeleton/core/skeleton.css" />
```

## Usage

```tsx
import { useSkeleton } from '@sync-skeleton/react'
import styles from './element.module.css'

export function Element() {
  // Use the hoof to get a ref to the element, this establishes the CSS properties needed for the class to work
  const ourEl = useSkeleton()

  return (
    // Add the global `loading-skeleton` class to the element
    <div ref={ourEl} className={`loading-skeleton ${styles.yourClassname}`} />
  )
}
```

## Caveats

- `.loading-skeleton` elements must not have an `::after` pseudo-element
- `.loading-skeleton` elements must be `relative`ly or `absolute`ly positioned (defaulted to `relative` through our class)
- `.loading-skeleton` elements must have `overflow` set to `hidden` (defaulted through our class)
