## Static Methods

```php
Common::return(array $obj): void
```
Echos an object as a JSON string and exits.

|		 |		|							   |
| ------- | ------ | ----------------------------- |
| *array* | `$obj` | The object to encode and echo |

---

```php
Common::escape(string $value): string
```
Escapes a GET/POST string.
HTML special characters are encoded and whitespace is trimmed.

|		  |		  |					 |
| -------- | -------- | ------------------- |
| *string* | `$value` | The value to escape |

---

```php
Common::randomToken(int $length): string
```
Builds a random token string.
Token characters `:= /[_\-0-9A-Za-z]/`

|		  |		   |							   |
| -------- | --------- | ----------------------------- |
| *int*	| `$length` | Length of the token to create |
| *string* | `@return` | Random token				  |

---

```php
Common::redirect(string $url = '', array $params = null, string $hash = ''): void
```
Redirects the client to an absolute url.
Sets the `Location` header property.

|		  |		   |										   |
| -------- | --------- | ----------------------------------------- |
| *string* | `$url`	| The absolute url to the root domain	   |
| *array*  | `$params` | Associate array of url parameters		 |
| *string* | `$hash`   | A hash string including the '#' character |

---

```php
Common::getLoginStatus(): bool
```
Gets the login status of the current session.
Verifies access tokens between the client and the user session.

|		|		   |									 |
| ------ | --------- | ----------------------------------- |
| *bool* | `@return` | Whether the user has been validated |

---

```php
Common::formatDate(string $date_time_str, bool $time = false, $timezone_offset = null): string
```
Formats a date (and time) string for the client.
Performs formatting and timezone offsetting if available.

|		  |					|																		 |
| -------- | ------------------ | ----------------------------------------------------------------------- |
| *string* | `$date_time_str`   | A parseable date or date-time string									|
| *bool*   | `$time`			| Whether time is present in the `$date_time_str` and should be formatted |
| *mixed*  | `$timezone_offset` | The hour offset from UTC time										   |
| *string* | `@return`		  | The formatted datetime string										   |
