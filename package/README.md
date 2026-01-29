# 🔄 Sync Skeleton 💀

A CSS-only skeleton loader that supports syncing multiple elements' loading indicator at the same time.

<br>

<div align="center">
  <img src="https://raw.githubusercontent.com/crutchcorn/sync-skeleton/refs/heads/main/media/skeleton.gif" width="45%" alt="A skeleton loader with a single gradient going through all elements as if they were a single element" style="margin-right: 10px;" title="Example of the default skeleton loader styling">
  <img src="https://raw.githubusercontent.com/crutchcorn/sync-skeleton/refs/heads/main/media/skeleton-dark.gif" width="45%" alt="A dark version of the previous skeleton loader" title="Example of the default skeleton loader styling in dark mode">
</div>
  
<div align="center">
  <em>Compatible with all frameworks, including TailwindCSS</em><br>  
  <img height="24" src="https://raw.githubusercontent.com/crutchcorn/sync-skeleton/refs/heads/main/media/icons/tailwind.png" alt="TailwindCSS" title="works with TailwindCSS">
  <img height="24" src="https://raw.githubusercontent.com/crutchcorn/sync-skeleton/refs/heads/main/media/icons/reactjs.png" alt="ReactJS" title="works with ReactJS">
  <img height="24" src="https://raw.githubusercontent.com/crutchcorn/sync-skeleton/refs/heads/main/media/icons/sveltejs.png" alt="SvelteJS" title="works with SvelteJS">
  <img height="24" src="https://raw.githubusercontent.com/crutchcorn/sync-skeleton/refs/heads/main/media/icons/vuejs.png" alt="VueJS" title="works with VueJS">
  <img height="24" src="https://raw.githubusercontent.com/crutchcorn/sync-skeleton/refs/heads/main/media/icons/js.png" alt="Vanilla JS" title="works with Vanilla JS">
  <img height="24" src="https://raw.githubusercontent.com/crutchcorn/sync-skeleton/refs/heads/main/media/icons/plus.png" alt="And more!" title="And anything else!">
</div>

<br><br>

## Installation

```shell
npm install sync-skeleton
```

The only prerequisite to using this package is the CSS file. Import it in your project via TypeScript:

```typescript
// Required for usage
import 'sync-skeleton/skeleton.css'
```

Or via HTML:

```html
<link rel="stylesheet" href="node_modules/sync-skeleton/skeleton.css" />
```

<br><br>

## Usage

Then, add the `loading-skeleton` class to any element you want to have the skeleton loader applied to.

```html
<div class="loading-skeleton" style="width: 200px; height: 20px;"></div>
```

### 📝 Examples;

#### Custom colored loader;

```css
:root {
  /* apply to all loader elements */
  --skeleton-radius: 4px;
}
.orange-purple-loader {
  /* apply to loaders with the 'orange-purple-loader' class only */
  --skeleton-base-color: tomato;
  --skeleton-base-color-dark: darkred;
  --skeleton-highlight-color: darkslateblue;
  --skeleton-highlight-color-dark: indigo;
  max-width: 300px;
  aspect-ratio: 4/3;
}
```

```html
<div class="orange-purple-loader"></div>
```

#### Using Sync-Skeleton in a typical project;

See the [example folder for more detailed usage with Vite](/example).

#### Using Sync-Skeleton with TailwindCSS;

Here's a [live demo on the tailwind playground](https://play.tailwindcss.com/nFhJkx8koT?file=css)!

#### Using Sync-Skeleton with a Framework;

There's a bunch of examples [in this Github Issue #2](https://github.com/crutchcorn/sync-skeleton/issues/2#issuecomment-3433884284) for
React, Vue, Svelte, Solid, etc. (Thanks, @hatemhosny)

<br><br>

## 📐 CSS Variables for customising

### 🎨 Styling / Design;

These can be overridden globally (`:root {}`), or on a per-element basis.

| Variable                                 | default                     | type       | Description                                        |
| ---------------------------------------- | --------------------------- | ---------- | -------------------------------------------------- |
| `--skeleton-base-color`                  | `hsl(0 0% 92% / 100%)`      | `<color>`  | The base color of the skeleton                     |
| `--skeleton-base-color-dark`             | `hsl(0 0% 20% / 100%)`      | `<color>`  | The base color of the skeleton in dark mode        |
| `--skeleton-highlight-color`             | `hsl(0 0% 96% / 100%)`      | `<color>`  | The highlight color of the skeleton                |
| `--skeleton-highlight-color-dark`        | `hsl(0 0% 15% / 100%)`      | `<color>`  | The highlight color of the skeleton in dark mode   |
| `--skeleton-highlight-size`              | `clamp(100px, 50vw, 500px)` | `<length>` | The width of the highlight wave gradient           |
| `--skeleton-highlight-leading-edge-blur` | `clamp(10px, 5vw, 50px)`    | `<length>` | How much to blur the leading edge of the highlight |
| `--skeleton-radius`                      | `0px`                       | `<length>` | The radius of the skeleton                         |
| `--skeleton-angle`                       | `90deg`                     | `<angle>`  | The angle of the highlight                         |

### 🎬 Animation;

Animation variables are only global (not per-element) and editable via the `:root {}` selector.

| Variable                                | default                              | type                | Description                                                                                      |
| --------------------------------------- | ------------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------ |
| `--skeleton-ease`                       | `cubic-bezier(0.45, 0.3, 0.7, 0.55)` | `<easing-function>` | The ease of the animation                                                                        |
| `--skeleton-animation-animation-speed`  | `400`                                | `<number>`          | _(px)_ - The distance the animation will travel in pixels                                        |
| `--skeleton-animation-animation-time`   | `1`                                  | `<number>`          | _(seconds)_ - The time of each animation loop                                                    |
| `--skeleton-animation-animation-scaler` | `0.7`                                | `<number>`          | _(0-1)_ - How much to scale the animation speed up as the screen size increases, 0.7 feels good. |

<br><br>

## 🌙 Dark Mode;

We automatically apply dark mode to the skeleton when <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme">the `color-scheme` is set to `dark`</a> or `light dark` and the `prefers-color-scheme` is set to `dark`,
which will then draw on the `--skeleton-base-color-dark` and `--skeleton-highlight-color-dark` variables.

Additionally, you can add the `dark` class to the skeleton to force dark mode.

```html
<div class="loading-skeleton dark">...</div>
```

Or if your entire application is a dark theme, then you can simply change
the `--skeleton-base-color` to an appropriate shade of your choice.
