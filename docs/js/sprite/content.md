[Class]: #Class
[Class-Constructor]: #Class-Constructor
[Class-Properties]: #Class-Properties
[Class-Methods]: #Class-Methods
[Static]: #Static
[Static-Properties]: #Static-Properties
[Static-Methods]: #Static-Methods
[Static-Interfaces_and_Enums]: #Static-Interfaces_and_Enums

- [Sprite Class][Class]
  - [Constructor][Class-Constructor]
  - [Properties][Class-Properties]
  - [Methods][Class-Methods]
- [Sprite Object][Static]
  - [Properties][Static-Properties]
  - [Methods][Static-Methods]
  - [Interfaces and Enums][Static-Interfaces_and_Enums]

---

---

<a name="Class"></a>

# Sprite Class

<a name="Class-Constructor"></a>

## Constructor

```typescript
class Sprite {
    constructor(container: HTMLElement, options?: Sprite.Options)
}
```
Creates a sprite animation element.

|                  |             |                                       |
| ---------------- | ----------- | ------------------------------------- |
| *HTMLElement*    | `container` | Container element for the sprite icon |
| *Sprite.Options* | `options`   |                                       |

---

<a name="Class-Properties"></a>

## Properties

Standard properties

| Type             | Name              | Description                                       |
| ---------------- | ----------------- | ------------------------------------------------- |
| *string*         | `id`              | Object id                                         |
| *HTMLElement*    | `icon`            | Icon container                                    |
| *boolean*        | `isStopRequested` | Whether stopping the animation has been requested |
| *boolean*        | `isAnimated`      | Whether the object is currently animated          |
| *Sprite.Frame[]* | `frames`          | Collection of sprite frames                       |
| *number*         | `frameIndex`      | Active frame index                                |
| *number*         | `sheetHeight`     | Sprite sheet height in px                         |
| *number*         | `SheetWidth`      | Sprite sheet width in px                          |

---

Optional properties

| Type              | Name         | Default                        | Description                                                       |
| ----------------- | ------------ | ------------------------------ | ----------------------------------------------------------------- |
| *Sprite.Behavior* | `behavior`   | `Sprite.Behavior.linear`       | Animation delay behavior                                          |
| *Spite.Direction* | `direction`  | `Sprite.Direction.leftToRight` | Animation frame indexed flow direction                            |
| *number*          | `delay`      | `0`                            | Delay between animated frames in ms                               |
| *boolean*         | `canLoop`    | `false`                        | Whether the sprite can loop when animated                         |
| *boolean*         | `canReset`   | `false`                        | Wether the sprite can reset to the starting frame after animating |
| *number*          | `height`     | `0`                            | Sprite height in px                                               |
| *number*          | `weight`     | `0`                            | Sprite width in px                                                |
| *string*          | `url`        | `null`                         | Sprite sheet url                                                  |
| *number*          | `startFrame` | `0`                            | Start frame index                                                 |
| *number*          | `endFrame`   | `null`                         | Ending frame index                                                |

---

<a name="Class-Methods"></a>

## Methods

```typescript
Sprite.prototype.animate(): void
```
Animates the sprite element.

---

```typescript
Sprite.prototype.setFrame(index: number): void
```
Sets the current sprite sheet frame.

|          |         |                                          |
| -------- | ------- | ---------------------------------------- |
| *number* | `index` | Changes the frame to the specified index |

---

```typescript
Sprite.prototype.reset(): void
```
Resets the sprite animation to the initial frame.

---

```typescript
Sprite.prototype.stop(reset: boolean): void
```
Stops the sprite animation.

|           |         |                                                            |
| --------- | ------- | ---------------------------------------------------------- |
| *boolean* | `reset` | Whether to reset the sprite animation to the initial frame |

---

---

<a name="Static"></a>

# Sprite Object

<a name="Static-Properties"></a>

## Properties

| Type                   | Name              | Description                                    |
| ---------------------- | ----------------- | ---------------------------------------------- |
| *Sprite.Cache*         | `cache`           | Resource cache interface                       |
| *string*               | `className`       | Class name root                                |
| *Sprite.Options*       | `options`         | Sprite class constructor options               |
| *string*               | `staticClassName` | Static class name root                         |
| *Sprite.StaticOptions* | `staticOptions`   | Static sprite default options                  |
| *HTMLStyleElement*     | `styleElement`    | Style element defining sprite and frame styles |

---

<a name="Static-Methods"></a>

## Methods

```typescript
Sprite.setOptions(options: Sprite.Options): void
```
Sets the default options.

|                  |           |
| ---------------- | --------- |
| *Sprite.Options* | `options` |

---

```typescript
Sprite.assignSpriteSheetAsync(sprite: Sprite, callback: (thisArg: Sprite) => void): void
```
Assigns a sprite sheet source to the sprite object.

|            |            |
| ---------- | ---------- |
| *Sprite*   | `sprite`   |
| *function* | `callback` |

---

```typescript
Sprite.getUrlId(url: string): string
```
Gets the url id.

|          |       |
| -------- | ----- |
| *string* | `url` |

---

```typescript
Sprite.getNextStaticId(url: string): string
```
Increments the next static id for a unique sprite sheet.

|          |       |
| -------- | ----- |
| *string* | `url` |

---

```typescript
Sprite.makeFrameList(sprite: Sprite): void
```
Makes the sprite frame list base on the sprite sheet dimensions and specified flow direction.

|          |          |
| -------- | -------- |
| *Sprite* | `sprite` |

---

```typescript
Sprite.createClass(name: string, style: Sprite.Style): string
```
Creates a CSS class string.

|                |         |            |
| -------------- | ------- | ---------- |
| *string*       | `name`  | Class name |
| *Sprite.Style* | `style` |            |

---

```typescript
Sprite.appendStyle(sprite: Sprite): void
```
Appends a unique class for a sprite element.

|          |          |
| -------- | -------- |
| *Sprite* | `sprite` |

---

```typescript
Sprite.createStatic(container: HTMLElement, options: Sprite.StaticOptions): void
```
Creates a static sprite.

|                        |             |                                       |
| ---------------------- | ----------- | ------------------------------------- |
| *HTMLElement*          | `container` | Container element for the sprite icon |
| *Sprite.StaticOptions* | `options`   |                                       |

---

<a name="Static-Interfaces_and_Enums"></a>

## Interfaces and Enums

```typescript
interface Sprite.Options
```

| Type              | Name         | Default                        | Description                                                       |
| ----------------- | ------------ | ------------------------------ | ----------------------------------------------------------------- |
| *Sprite.Behavior* | `behavior`   | `Sprite.Behavior.linear`       | Animation delay behavior                                          |
| *Spite.Direction* | `direction`  | `Sprite.Direction.leftToRight` | Animation frame indexed flow direction                            |
| *number*          | `delay`      | `0`                            | Delay between animated frames in ms                               |
| *boolean*         | `canLoop`    | `false`                        | Whether the sprite can loop when animated                         |
| *boolean*         | `canReset`   | `false`                        | Wether the sprite can reset to the starting frame after animating |
| *number*          | `height`     | `0`                            | Sprite height in px                                               |
| *number*          | `weight`     | `0`                            | Sprite width in px                                                |
| *string*          | `url`        | `null`                         | Sprite sheet url                                                  |
| *number*          | `startFrame` | `0`                            | Start frame index                                                 |
| *number*          | `endFrame`   | `null`                         | Ending frame index                                                |

---

```typescript
interface Sprite.StaticOptions
```

| Type     | Name     | Default | Description                      |
| -------- | -------- | ------- | -------------------------------- |
| *number* | `height` | `0`     | Sprite height in px              |
| *number* | `width`  | `0`     | Sprite width in px               |
| *number* | `x`      | `0`     | X position on sprite sheet in px |
| *number* | `y`      | `0`     | Y position on sprite sheet in px |
| *string* | `url`    | `null`  | Sprite sheet url                 |

---

```typescript
interface Sprite.Style
```

| Type                     | Name                 | Description               |
| ------------------------ | -------------------- | ------------------------- |
| *string*                 | `backgroundImage`    | Background image url      |
| *{x: number, y: number}* | `backgroundPosition` | Background image position |
| *number*                 | `height`             | Sprite height in px       |
| *number*                 | `width`              | Spiret width in px        |

---

```typescript
enum Sprite.Behavior = {
    linear,
    easeIn,
    easeOut
}
```

Animation delay behavior enum.

---

```typescript
enum Sprite.Direction = {
    leftToRight,
    topToBottom
}
```

Animation frame indexed flow direction.

---
