## ContactManager API

The "ContactManager" project is a fundamental Node.js-based API service tailored for managing contacts. It enables users to establish accounts and conduct operations on contacts retained within an address book. This API provides endpoints for registration, authentication, session management, avatar updates, subscription type modifications, contact listing, specific contact retrieval, contact addition, contact updates, and contact removal. Moreover, it incorporates user authentication mechanisms and authorized access controls to guarantee secure interactions and limit certain functionalities to authenticated users.

## Installation

1. Clone this repository.
2. Run `npm install`.
3. Update `.env` file in the root directory with the variables set:
   - `DB_HOST`: Your MongoDB database connection URL
   - `SECRET`: Secret key
   - `BASE_URL`: 'http://127.0.0.1:3000' or your local server URL

## Scripts

- `npm start`: Starts the application in production mode, granting access to contact management via the command-line interface.

## 1. User registration

Register a new user.

- **Path:** `/api/users/signup`
- **Method:** POST
- **Content-Type:** application/json
- **Request Body:** JSON with new user data
  Example Request Body:

```json
{
  "email": "myEmail@domain.com",
  "password": "blablabla"
}
```

**Response status:**

- 201 Created - Registration success
- 409 Conflict - Registration conflict error - "Email in use"
- 400 Bad Request - Registration validation error

## 2. User log in

Log in an existing user.

- **Path:** `/api/users/login`
- **Method:** POST
- **Content-Type:** application/json
- **Request Body:** JSON with user data
  Example Request Body:

```json
{
  "email": "myEmail@google.com",
  "password": "blablabla"
}
```

**Response status:**

- 200 OK - Login success response
- 400 Bad Request - Login validation error
- 401 Unauthorized - Login auth error

## 3. User log out

Log out a user.

- **Path:** `/api/users/logout`
- **Method:** GET
- **Authorization:** "Bearer {{token}}"

**Response status:**

- 204 No Content - Logout success response
- 401 Unauthorized - Logout unauthorized error

## 4. Get user info

Get info about existing user.

- **Path:** `/api/users/current`
- **Method:** GET
- **Authorization:** "Bearer {{token}}"

**Response status:**

- 200 OK - Current user - success
- 401 Unauthorized - Unauthorized error

## 5. Update subscription

Update user subscription type.

- **Path:** `/api/users/subscription`
- **Method:** PATCH
- **Authorization:** "Bearer {{token}}"
- **Content-Type:** application/json
- **Request Body:** JSON with user data
  Example Request Body:

```json
{
  "subscription": "starter"
}
```

**Response status:**

- 200 OK - Update success
- 401 Unauthorized - unauthorized error

## 6. Update avatar

Update user avatar.

- **Path:** `/api/users/avatars`
- **Method:** PATCH
- **Authorization:** "Bearer {{token}}"
- **Content-Type:** multipart/form-data
- **Request Body:** JSON with user data

**Response status:**

- 200 OK - Update success
- 401 Unauthorized - unauthorized error

## **Contacts endpoints**

## 1. List Contacts

Get a list of all contacts in the address book.

- **Path:** `/api/contacts`
- **Method:** GET

**Response status:**

- 200 OK
- 401 Unauthorized
- 404 Not Found

**Example response:**

```json
[
  {
    "id": "AeHIrLTr6JkxGE6SN-0Rw",
    "name": "Allen Raymond",
    "email": "nulla.ante@vestibul.co.uk",
    "phone": "(992) 914-3792"
  }
]
```

## Pagination

The Contacts API provides pagination capabilities, allowing users to retrieve contacts in a paginated format. Users can specify the page and limit parameters in their API requests to control the number of contacts shown per page and navigate through the contact list accordingly.

## Parameters:

- **page:** - page number (e.g., page=10).
- **limit:** - maximum number of contacts on a single page (e.g., limit=10)
- **Example usage:** `/api/contacts?page=1&limit=10`

## Filtering by Favorites

The Contacts API facilitates filtering contacts according to their favorite status. By adding favorite=true to the API endpoint, users can fetch contacts that are marked as favorites.
**Usage:** `/api/contacts?favorite=true`

## 2. Get Contact by ID

Get details of a specific contact based on its ID.

- **Path:** `/api/contacts/:contactId`
- **Method:** GET
- **URL Parameters:** `contactId - Contact ID`

**Response status:**

- 200 OK
- 401 Unauthorized
- 404 Not Found

**Example response:**

```json
{
  "id": "bgoMgyVQdWRbfd5",
  "name": "Adam Nowak",
  "email": "myMail@domain.com",
  "phone": "997 998 999"
}
```

## 3. Add New Contact

Add a new contact to the address book.

- **Path:** `/api/contacts/`
- **Method:** POST
- **Request Body:** JSON with new contact data

**Response status:**

- 201 Created
- 401 Unauthorized
- 400 Bad Request - message "missing required field"

**Example Request Body:**

```json
{
  "name": "MyName",
  "email": "muEmail@google.com",
  "phone": "123123123"
}
```

## 4. Update Contact

Update the data of a specific contact based on its ID.

- **Path:** `/api/contacts/:contactId`
- **Method:** GET
- **URL Parameters:** `contactId - Contact ID`
- **Request Body:** JSON with updated contact data

**Response status:**

- 200 OK
- 401 Unauthorized
- 404 Not Found

## 5. Remove Contact

Delete a specific contact based on its ID.

- **Path:** `/api/contacts/:contactId`
- **Method:** DELETE
- **URL Parameters:** `Contact ID`

**Response status:**

- 200 OK
- 401 Unauthorized
- 404 Not Found

## 6. Update Contact Status

Update contact status as favorite.

- **Path:** `/api/contacts/:contactId/favorite`
- **Method:** PATCH
- **URL Parameters:** `contactId - Contact ID`
- **Request Body:** JSON with data
  Example Request Body:

```json
{
  "favorite": true
}
```

**Response status:**

- 200 OK
- 401 Unauthorized
- 404 Not Found
