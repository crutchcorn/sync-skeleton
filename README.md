# 🔄 Sync Skeleton 💀

A framework agnostic skeleton loader that supports syncing multiple elements' loading indicator at the same time.

![A skeleton loader with a line going through multiple elements at the same time despite different widths](./media/skeleton.gif)

## 📐 CSS Variables for customising

### 🎨 Styling / Design;

| Variable | default | type |Description |
|----------|---------|------|-------------|
| `--skeleton-base-color` | `hsl(0 0% 92% / 100%)` | `<color>` | The base color of the skeleton |
| `--skeleton-base-color-dark` | `hsl(0 0% 20% / 100%)` | `<color>` | The base color of the skeleton in dark mode |
| `--skeleton-highlight-color` | `hsl(0 0% 96% / 100%)` | `<color>` | The highlight color of the skeleton |
| `--skeleton-highlight-color-dark` | `hsl(0 0% 15% / 100%)` | `<color>` | The highlight color of the skeleton in dark mode |
| `--skeleton-highlight-size` | `clamp(100px, 50vw, 500px)` | `<length>` | The width of the highlight wave gradient |
| `--skeleton-highlight-leading-edge-blur` | `clamp(10px, 5vw, 50px)` | `<length>` | How much to blur the leading edge of the highlight |
| `--skeleton-radius` | `0px` | `<length>` | The radius of the skeleton |
| `--skeleton-angle` | `90deg` | `<angle>` | The angle of the highlight |

### 🎬 Animation;

| Variable | default | type | Description |
|----------|---------|------|-------------|
| `--skeleton-repeat` | `infinite` | `<number>` | How many times the animation will repeat |
| `--skeleton-ease` | `cubic-bezier(0.45, 0.3, 0.7, 0.55)` | `<easing-function>` | The ease of the animation |
| `--skeleton-animation-animation-speed` | `400` | `<number>` | _(px)_ - The distance the animation will travel in pixels |
| `--skeleton-animation-animation-time` | `1` | `<number>` | _(seconds)_ - The time of each animation loop |
| `--skeleton-animation-animation-scaler` | `0.7` | `<number>` | _(0-1)_ - How much to scale the animation speed up as the screen size increases, 0.7 feels good. |

### 📝 Example;

```css
/* example of modifying the default color variables */
:root {
  --skeleton-base-color: orangered;
  --skeleton-base-color-dark: tomato;
  --skeleton-highlight-color: darkslateblue;
  --skeleton-highlight-color-dark: indigo;
}
```

## 🌙 Dark Mode;

We automatically apply dark mode to the skeleton when <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme">the `color-scheme` is set to `dark`</a> or `light dark` and the `prefers-color-scheme` is set to `dark`,
which will then draw on the `--skeleton-base-color-dark` and `--skeleton-highlight-color-dark` variables.

Additionally, you can add the `dark` class to the skeleton to force dark mode.

```html
<div class="loading-skeleton dark">
  ...
</div>
```

Or if your entire application is a dark theme, then you can simply change
the `--skeleton-base-color` to an appropriate shade of your choice.

## 🔌 Adapters

We support adapters for:

- [React](./packages/react)
- [Vue](./packages/vue)
