# Chrome Extension Icons

Chrome extensions require icons in three sizes: 16x16, 48x48, and 128x128 pixels.

## Generate Icons

Place your source image as `icons/base_icon.jpg` or `icons/base_icon.png`, then run:

```bash
magick icons/base_icon.jpg -resize 128x128 icons/icon128.png
magick icons/base_icon.jpg -resize 48x48 icons/icon48.png
magick icons/base_icon.jpg -resize 16x16 icons/icon16.png
```

Requires ImageMagick installed (`brew install imagemagick` on macOS or `apt install imagemagick` on Linux).