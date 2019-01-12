# Project Name

> Project description

## Related Projects

  - https://github.com/QueryMasters/product-service
  - https://github.com/QueryMasters/reviews-service
  - https://github.com/QueryMasters/related-items-service
  - https://github.com/QueryMasters/Checkout-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

1. Node/npm
2. MongoDB/Mongoose
3. React/react-dom
4. Webpack
5. Babel-loader/babel-cli/babel-core

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
## API METHODS

CREATE: Add a new product
  - Route: POST /products
  - Input: Object with product information in below structure
  - Output: none

READ: Get product information
  - Route: GET /products/:id/info
  - Input: Path param 'id'
  - Output: Array of objects with the following structure:
  ```
      { 
       id: INTEGER,
        name: STRING,
        description: STRING,
        seller: STRING,
        prime_eligible: BOOLEAN,
        versions: {
          new: {
            qty_in_stock: INTEGER,
            price: INTEGER,
          },
          old: {
            qty_in_stock: INTEGER,
            price: INTEGER,
          },
        },
        image_urls: STRING,
        expected_date_of_arrival: INTEGER,
        five_star_reviews: INTEGER,
        four_star_reviews: INTEGER,
        three_star_reviews: INTEGER,
        two_star_reviews: INTEGER,
        one_star_reviews: INTEGER,
        answered_questions: INTEGER,
      }
 ```
UPDATE: Update product information
  - Route: PUT /products/:id
  - Input: path param 'id' and updated info in object format
  - Output: none

DELETE: Delete a product
  - Route: DELETE /products/:id 
  - Input: path param 'id'
  - Output: none
