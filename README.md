# Games shop demo
## Introduction
`Games shop demo` is the base of a "boilerplate" to create online shops via React.

The project is developed using JavaScript and runs on the [nodeJS](https://nodejs.org/en/) runtime.

UI is created using [React](https://it.reactjs.org/) with the support of [ChakraUI](https://chakra-ui.com/).

The back-end is developed using [Express](https://expressjs.com/), [Sequelize](https://sequelize.org/) and [postgreSQL](https://www.postgresql.org/); 

Games shop has the following features:
* `paginator` - Choose the page of products that you want to view
* `searchbar` - Search your product in the list!
* `responsive design` - The view changes between desktop and mobile versions!
### TABLET VIEW
![responsive_2](/src/assets/screens/tablet_view.png)
### MOBILE VIEW
![responsive_3](/src/assets/screens/phone_view.png)

## ROUTES
* `/` - To view HomePage

![responsive_1](/src/assets/screens/dashboard_screen.png)

* `/products/:productId` - To view product details

![details](/src/assets/screens/product_details.png)

* `/editProduct/:productId` - To edit a product

![edit](/src/assets/screens/editing_a_product.png)

* `/createProduct` - To create a new product

![create](/src/assets/screens/creation_of_a_product.png)

* `/login` - To view login page

![login](/src/assets/screens/login.png)

## BE ROUTES

### GET METHODS

* `GET /products` - get all products
* `GET /products/:productId` - get product details

### PUT METHODS

* `PUT /products/:productId` - edit the product on db

### POST METHODS

* `POST /product` - create a new product on db
* `POST  /login` - To login on the portal

### DELETE METHODS

* `DELETE /products/:productId` - delete the product from the db

## Installation / Run

To view the project correctly, first start the back_end part of the project and then the web app.

! Attention The server will start on port 3000 and the react part on port 3006, if they are not available, change the pointers within the project.

### BE SIDE

To run the BE, install all node packages with the command below:

```
cd games_shop_backend
$ npm install 
```

When all packages have installed, run the command:

```
$ npm start
```

### FE SIDE

To run the project, open a new terminal and install all node packages with the command below:

```
cd ..
$ npm install 
```

When all packages have installed, run the command:

```
$ npm start
```