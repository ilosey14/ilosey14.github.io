[Example](example.html)

---

```typescript
const tooltip(element: HTMLElement, content: string | HTMLElement): void
```
Displays a tooltip on the specified element.

||||
|-|-|-|
| *HTMLElement* | `element` | Tooltip element |
| *string* \| *HTMLElement* | `content` | Tooltip content |

---

```typescript
tooltip.addTemplate(name: string, content: string | HTMLElement): void
```
Adds a named template to be displayed later.

||||
|-|-|-|
| *string* | `name` | Template name |
| *string* \| *HTMLElement* | `content` | Template content |

---

```typescript
tooltip.addListeners(element: HTMLElement, content: string | HTMLElement): void
```
Attaches tooltip listeners to an element.

||||
|-|-|-|
| *HTMLElement* | `element` |  |
| *string* \| *HTMLElement* | `content` |  |

---

```typescript
tooltip.clear(): void
```
Clears the current contents.

---

```typescript
tooltip.close(): void
```
Closes the tooltip and clears its contents.

---

### Events

```typescript
tooltip.onopen: () => void
```
Called when the tooltip is opened or changed.

---

```typescript
tooltip.onclear: () => void
```
Called when the tooltip is cleared.

---

```typescript
tooltip.onclose: () => void
```
Called when the tooltip is closed.

---
