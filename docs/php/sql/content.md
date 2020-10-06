## Static Methods

```php
SQL::connect(string $host?, string $root?, string $password?, string $database?): void
```
Instantiates a new `mysqli` connection with a database.

|		  |			 |			   |
| -------- | ----------- | ------------- |
| *string* | `$host`	 | Host URI	  |
| *string* | `$root`	 | Root name	 |
| *string* | `$password` | Root password |
| *string* | `$database` | Database name |

---

```php
SQL::close(): void
```
Closes the connection to the database.

---

```php
SQL::init(int|array $tables?): void
```
Initializes table dependencies.

|			  |		   |															  |
| ------------ | --------- | ------------------------------------------------------------ |
| *int\|array* | `$tables` | Enumerations of tables to initialize i.e. `SQL::TABLE_USERS` |

---

```php
SQL::query(\SQL\Query $query): mysqli_stmt
```
Prepares and executes an SQL query

|			   |		   |												|
| ------------- | --------- | ---------------------------------------------- |
| *\\SQL\\Query*  | `$query`  | Query object to execute						|
| *mysqli_stmt* | `@return` | Prepared and executed `mysqli` query statement |

---

```php
SQL::getResults(mysqli_stmt $stmt, int $fetch_type?): array|null
```
Gets the specified result type from an executed `mysqli` statement.

|			   |			   |												   |
| ------------- | ------------- | ------------------------------------------------- |
| *mysqli_stmt* | `$stmt`	   | Statement object								  |
| *int*		 | `$fetch_type` | Whether to return the first row or all rows	   |
| *array\|null* | `@return`	 | The result array or null if no rows were returned |

---

```php
SQL::getRow(string $table, array $id, array $prop_names?): array|null
```
Gets the property info about a row by its unique id(s).

|			   |			   |													|
| ------------- | ------------- | -------------------------------------------------- |
| *string*	  | `$table`	  | Table name										 |
| *array*	   | `$id`		 | Unique row column-name and value				   |
| *array*	   | `$prop_names` | Property names to get from the rows				|
| *array\|null* | `@return`	 | An associative array or null if no rows were found |

---

```php
SQL::getRows(string $table, array $params, array $prop_names?): array|null
```
Gets an array of rows by their property names.

|			   |			   |													   |
| ------------- | ------------- | ----------------------------------------------------- |
| *string*	  | `$table`	  | Tables name										   |
| *array*	   | `$params`	 | `where`, `order_by`, `sort`, `limit`, `offset`		|
| *array*	   | `$prop_names` | Property names to get from the rows				   |
| *array\|null* | `@return`	 | An array of result rows or null if no rows were found |

---

```php
SQL::setRow(string $table, array $id, array $prop_list): int
```
Sets the column values in `$prop_list` of a row by its unique id.

|		  |			  |												 |
| -------- | ------------ | ----------------------------------------------- |
| *string* | `$table`	 | Table name									  |
| *array*  | `$id`		| Unique row column-name and value of rows to set |
| *array*  | `$prop_list` | Associative array of column values			  |
| *int*	| `@return`	| The number of affected rows					 |

---

```php
SQL::insertRow(string $table, array $prop_list): int
```
Inserts a new row into a table.

|		  |			  |									|
| -------- | ------------ | ---------------------------------- |
| *string* | `$table`	 | Table name						 |
| *array*  | `$prop_list` | Associative array of column values |
| *int*	| `@return`	| The number of affected rows		|

---

```php
SQL::deleteRow(string $table, array $id): int
```
Deletes a row from a table.

|		  |		   |													   |
| -------- | --------- | ----------------------------------------------------- |
| *string* | `$table`  | Table name											|
| *array*  | `$id`	 | Unique row column-name and value of the row to delete |
| *int*	| `@return` | The number of affected rows						   |

---

```php
SQL::escape(string $value): string
```
Escapes/sanitizes a string used to query the connected database.

|		  |		   |					   |
| -------- | --------- | --------------------- |
| *string* | `$value`  | The value to sanitize |
| *string* | `@return` | The sanitized string  |

---

```php
SQL::return(array $obj): void
```
Echos a JSON encoded string and exists the script.

|		 |		|				   |
| ------- | ------ | ----------------- |
| *array* | `$obj` | An object to echo |

---

## Constants

```php
SQL::FETCH_FIRST
```
* For `SQL::getResults`
* Returns the first result from the query

---

```php
SQL::FETCH_ALL
```
* For `SQL::getResults`
* Returns all results fromm the query

---

```php
SQL::<TABLE_ENUM\
```
* For `SQL::init`
* Set these values in the class definition and implement them in `SQL::init` to initialize an interface with any existing table classes.
