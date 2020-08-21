## Methods

```php
View::__construct(string $title, string $dir)
```
Creates a new view object.

|          |         |                           |
| -------- | ------- | ------------------------- |
| *string* | `$name` | The document title        |
| *string* | `$dir`  | The page source directory |

---

```php
View::__set(string $name, string $value): void
```
Sets a template variable.

|          |          |                |
| -------- | -------- | -------------- |
| *string* | `$name`  | Variable name  |
| *string* | `$value` | Variable value |

---

```php
View::__get(string $name): mixed
```
Gets a template variable

|          |           |                                           |
| -------- | --------- | ----------------------------------------- |
| *string* | `$name`   | Name of an existing variable              |
| *mixed*  | `@return` | Existing variable value, otherwise `null` |

---

```php
View::render(): void
```
Renders the page with the current value set.

---

```php
View::renderPageHeader(): void
```
Renders up to the page's body header (if specified).
This is useful for returning immediate content to the user
while database queries and/or computation are taking place.

---

```php
View::setHeader(string $name, string|array $value): void
```
Sets a response header.

|                 |          |                               |
| --------------- | -------- | ----------------------------- |
| *string*        | `$name`  | Header name                   |
| *string\|array* | `$value` | One or multiple header values |

---

```php
View::includeComponent(string $name, array $scope = null): void
```
Include a component in a template by name.
Components are globally available to any view and are restricted to the provided scope.

|          |          |                                                                    |
| -------- | -------- | ------------------------------------------------------------------ |
| *string* | `$name`  | The component name. Its containing file should have the same name. |
| *array*  | `$scope` | The component's inherited variable scope                           |

---

```php
View::requireResource(string $name): void
```
Require a page resource by name, if available.
Resources are unique to a view directory and have access to the view template scope.

|          |         |                   |
| -------- | ------- | ----------------- |
| *string* | `$name` | The resource name |

---

```php
View::embedScript(string $name, array $vars = null, array $options = []): void
```
Embeds a JavaScript library into the markup.

|          |            |                                                             |
| -------- | ---------- | ----------------------------------------------------------- |
| *string* | `$name`    | The script name                                             |
| *array*  | `$vars`    | Name-value pairs to pass to the script as embeded variables |
| *array*  | `$options` | See below                                                   |

| Option     | Type | Description                       |
| ---------- | ---- | --------------------------------- |
| anonymous  | bool | Wrap script in anonymous function |
| compressed | bool | Compress the script               |

---

---

```php
StaticView::renderToFile(string $in_path = './index.php', string $out_path = './index.html'): void
```
Renders a script to a static output file.

|          |             |                           |
| -------- | ----------- | ------------------------- |
| *string* | `$in_path`  | The source file to render |
| *string* | `$out_path` | The rendered output file  |
