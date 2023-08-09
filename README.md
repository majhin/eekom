project-root
│
│── config
│ ├── mongoose.js
│ └── ...
│
│
├── controllers
│ ├── productController.js
│ └── ...
│
├── models
│ ├── Product.js
│ └── ...
│
├── routes
│ ├── index_routes.js
│ ├── productRoutes.js
│ └── ...
│
├── server.js
├── package.json
└── README.md

# Ecommerce Platform Admin API

This project provides an API for managing product inventory for an ecommerce platform admin. It is built using Node.js and MongoDB.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up MongoDB and update the `.env` file with the appropriate database URL.
4. Start the server using `node app.js`.

## API Endpoints

- `POST /products/create`: Add a new product to the database.
- `GET /products`: List all products in the inventory.
- `DELETE /products/:id`: Delete a product by ID.
- `POST /products/:id/update_quantity/?number=<value>`: Update the quantity of a product by ID.

## Example API Requests

you can make API requests using Postman for the endpoints :

_Add a Product_:

Send a POST request to http://localhost:3000/products/create with the following data in x-www-form-urlencoded format:
Key: name, Value: laptop
Key: quantity, Value: 10
Add a Product in Postman

_List Products_:

Send a GET request to http://localhost:3000/products:
List Products in Postman

_Delete a Product_:

Send a DELETE request to http://localhost:3000/products/1 (replace 1 with the actual product ID):
Delete a Product in Postman

_Update Product Quantity_:

Send a POST request to http://localhost:3000/products/1/update_quantity?number=5 (replace 1 with the actual product ID and adjust number as needed for the quantity change):

In Postman, you can select the appropriate HTTP method (GET, POST, DELETE), set the URL, and provide the necessary parameters in the x-www-form-urlencoded format.
