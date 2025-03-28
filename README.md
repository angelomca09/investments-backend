# Investments Backend

Initialy built with `tsc --init` and `npm init`, this project uses `tsx` to run Typescript files easier (no config).
Prisma was installed with `npx prisma init --datasource-provider sqlite` and then `npx prisma generate` to generate the prisma client.

## Setup

First be sure to have a `.env` file created with the same structure as `.env.example`.

To setup prisma: `npm run db:migrate`.

To run the application: `npm run dev`.

## Routes

| HTTP Method | Endpoint | Description | Request Body | Response Body |
|-|-|-|-|-|
| GET | `/investments` | Fetch all investments | N/A | Array of investments |
| POST | `/investments` | Create a new investment | `{ description, value, date, status, type }` | Created investment object |
| PUT | `/investments/:id` | Update an existing investment| Partial `{ description, value, date, status, type }` | Updated investment object |
| DELETE | `/investments/:id` | Delete an investment | N/A | N/A |

### Examples

**GET** `/investments` : Fetch all investments from the database.

Response:
```json
[
  {
    "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    "description": "Investment",
    "value": 1000,
    "date": "2025-01-01T00:00:00.000Z",
    "status": "DONE",
    "type": "BILLS"
  }
]
```

<br/>

**POST** `/investments` : Create a new investment.

Request:
```json
{
  "description": "Investment in home",
  "value": 500,
  "date": "2025-01-01",//"2025-01-01T00:00:00.000Z" would work too.
  "status": "PENDING",
  "type": "HOME"
}
```

Response:
```json
{
  "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "description": "Investment in home",
  "value": 500,
  "date": "2025-01-01T00:00:00.000Z",
  "status": "PENDING",
  "type": "HOME"
}
```

**PUT** `/investments:id` : Update an existing investment.

Request:
```json
{
  "description": "Updated investment description"
}
```

Response:
```json
{
  "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "description": "Updated investment description",
  "value": 500,
  "date": "2025-01-01T00:00:00.000Z",
  "status": "PENDING",
  "type": "HOME"
}
```

**DELETE** `/investments:id` : Delete an investment by its ID.
