[Example](example.html)

---

```typescript
const navCards[name: string]: NavCards
```

Global nav-cards index.
If this functionality is required, you must add an `id` or `data-name` attribute to your container.

---

```typescript
function NavCards(container: HTMLElement | string): void
```
Creates a NavCards navigable interface object.

||||
|-|-|-|
| *HTMLElement* \| *string* | `container` | The container element or its `id`. |

---

```typescript
NavCards.prototype.showCard(name: string): void
```
Shows the provided card by name.

||||
|-|-|-|
| *string* | `name` | Name of the card to show. |

---
