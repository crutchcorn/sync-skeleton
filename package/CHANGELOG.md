# sync-skeleton

## 1.1.0

### Minor Changes

- The shimmer now runs on `.loading-skeleton` instead of `:root`, and `--skeleton-percentage` no longer inherits.

  Loaders that show up in the same frame still share one wave. A loader that mounts later, or that was `display: none` and then shown, starts at 0 and stays out of phase.

  Reasoning; Animating an inherited custom property on `html` was restyling the whole document every frame causing significant jank on large documents especially with :has() selectors bound to the document root.
