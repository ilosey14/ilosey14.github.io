## Properties

| Type          | Name        | Description                                                  |
| ------------- | ----------- | ------------------------------------------------------------ |
| *HTMLElement* | `mask`      | Full screen mask element                                     |
| *HTMLElement* | `content`   | Content container element                                    |
| *HTMLElement* | `buttons`   | Button container element                                     |
| *boolean*     | `keepOpen`  | Whether to keep the messagebox open after selecting a button |
| *boolean*     | `isOpen`    | Whether the messagebox is open and visible                   |
| *object*      | `templates` | Named list of template elements                              |
| *object*      | `listeners` | Names list of template listeners                             |

---

## Methods

```typescript
messagebox(
    content: string | HTMLElement,
    buttons?: string | string[],
    callback?: MessageboxResponseCallback
): void
```
Displays a messagebox with content and buttons.

|                              |              |                                               |
| ---------------------------- | ------------ | --------------------------------------------- |
| *string*\|*HTMLElement*      | `content`    | Message content to display or a template name |
| *string*\|*string[]*         | [`buttons`]  | Button values                                 |
| *MessageboxResponseCallback* | [`callback`] | Handles user response                         |

---

```typescript
messagebox(
    content: string | HTMLElement,
    buttons: Object<string, MessageboxButtonCallback>,
    callback?: MessageboxResponseCallback
): void
```
Displays a messagebox with content and buttons.

|                                     |              |                                               |
| ----------------------------------- | ------------ | --------------------------------------------- |
| *string*\|*HTMLElement*             | `content`    | Message content to display or a template name |
| *Object\<MessageboxButtonCallback>* | `buttons`    | Button value-callback pairs                   |
| *MessageboxResponseCallback*        | [`callback`] | Handles user response                         |

---

```typescript
messagebox.addTemplate(
    name: string,
    content: string | HTMLElement,
    listener?: MessageboxButtonCallback
): void
```
Adds a named template to be displayed later.

(Optional) Associate a response callback with the template.
Can be overruled by the callback in the `messagebox` function.

|                              |              |                                                  |
| ---------------------------- | ------------ | ------------------------------------------------ |
| *string*                     | `name`       | Template name                                    |
| *string*\|*HTMLElement*      | `content`    | Template content                                 |
| *MessageboxResponseCallback* | [`listener`] | Function to invoke when a user response is given |

---

```typescript
messagebox.addListener(
    name: string,
    listener: MessageboxResponseCallback
): void
```
Adds a listener to an existing template.

|                              |            |                                                  |
| ---------------------------- | ---------- | ------------------------------------------------ |
| *string*                     | `name`     | Existing template name                           |
| *MessageboxResponseCallback* | `listener` | Function to unvoke when a user response is given |

---

```typescript
messagebox.clear(): void
```

Clears the contents and buttons.

---

```typescript
messagebox.close(): void
```

Closes the messagebox and clears its contents.

---

## Listeners

| Name      | Arguments | Description                             |
| --------- | --------- | --------------------------------------- |
| `onshow`  | None      | Runs when the messagebox is first shown |
| `onclose` | None      | Runs when the messagebox is closing     |

---

## Types

`MessageboxResponseCallback`
```typescript
(response: string, content: HTMLElement) => void
```

---

`MessageboxButtonCallback`
```typescript
(content: HTMLElement) => void
```

---
