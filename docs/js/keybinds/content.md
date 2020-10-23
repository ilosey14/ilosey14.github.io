[Example](example.html)

---

```typescript
const keybinds = {};
```
Keyboard binding interface.
Pair keys and key combinations to actions and behaviors.

---

```typescript
interface BindOptions = {
	key: string
	action: (e: KeyboardEvent) => void,
	ctrl: boolean,
	shift: boolean,
	alt: boolean,
	preventDefault: boolean,
	stopPropagation: boolean
}
```

---

```typescript
keybinds.Bind(options: BindOptions): Bind
```
Key bind object constructor.

||||
|-|-|-|
| *BindOptions* | `options` |  |

---

```typescript
keybinds.set(key: string, options: BindOptions | function): void
```
Sets a new or overwrites an existing keybind.

||||
|-|-|-|
| *string* | `key` |  |
| *BindOptions* \| *function* | `options` |  |

---

```typescript
keybinds.remove(bind: keybinds.Bind): boolean
```
Removes a key bind.

||||
|-|-|-|
| *keybinds.Bind* | `bind` |  |

---

```typescript
keybinds.invoke(e: KeyboardEvent): void
```
Invokes a defined keybind from a keyboard event.

||||
|-|-|-|
| *KeyboardEvent* | `e` |  |

---

