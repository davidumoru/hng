# Number Classification API

## Overview

The **Number Classification API** is a RESTful API that takes an integer as input and returns various mathematical properties about it, along with a fun fact retrieved from the [Numbers API](http://numbersapi.com/).

## Features

- Determines if a number is **prime**.
- Determines if a number is **perfect**.
- Identifies if a number is **Armstrong**.
- Classifies the number as **odd** or **even**.
- Calculates the **digit sum** of the number.
- Fetches a **fun fact** from the Numbers API.

## API Documentation

### Endpoint: `GET /api/classify-number`

#### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `number`  | `integer` | Yes | The number to be classified |

#### Example Request

```txt
GET https://your-deployed-url.com/api/classify-number?number=371
```

#### Success Response (200 OK)

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### Error Response (400 Bad Request)

```json
{
    "number": "alphabet",
    "error": true
}
```

## Installation & Local Setup

### 1. Clone the Repository

```sh
git clone https://github.com/davidumoru/hng.git
cd hng/stage1
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Server

```sh
npm start
```

The server will run on `http://localhost:3000`

## Live API URL

[https://hng-stage1-umoru.vercel.app/](https://hng-stage1-umoru.vercel.app/)
