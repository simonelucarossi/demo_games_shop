import { Sequelize } from 'sequelize';
import Product from '../../database/models/Product.js';
import { hasRequiredParams, reqHasBodyParameters, sendInternalServerError } from '../../utility/errorsManager.js';
import responseModels from '../../utility/responseModels.js';

// CREATE A PRODUCT

export const createProduct = async (req, res) => {
  if (!reqHasBodyParameters(['product'], req, res)) {
    return;
  }

  let idObject = 1;

  await Product.findAll(
    {
      attributes: [Sequelize.fn('max', Sequelize.col('id'))],
      raw: true,
    },
  ).then((products) => {
    if (products) { idObject = products[0].max + 1; }
  });

  const productToAdd = req.body?.product;

  const newObject = {
    id: idObject,
    title: productToAdd.title ?? 'New product',
    imageurl: productToAdd.img ?? '#',
    price: Number(productToAdd.price)?.toFixed(2) ?? 10.00,
    category: productToAdd.category ?? 0,
    description: productToAdd.description ?? '',
    tags: productToAdd.tags ? ("{" + productToAdd.tags?.toString() + "}") : "{}",
  };

  await Product
    .create(newObject).then(async () => { })
    .catch((err) => sendInternalServerError(err, res));
  res.status(responseModels.OK.code).json({ ...responseModels.OK, result: 'OK' });
};

// GET ALL PRODUCTS

export const getProducts = async (req, res) => {

  if (!hasRequiredParams([], req, res)) {
    return;
  }

  const totalProducts = await Product.count();
  const queryTitle = req.query?.title ? { title: req.query?.title } : {};
  const queryCategory = req.query?.category ? { category: req.query?.category } : {};
  const whereQuery = {
    ...queryTitle,
    ...queryCategory
  }


  Product.findAll({
    attributes: ['id', 'title', 'imageurl', 'price', 'category', 'tags'],
    where: whereQuery,
    limit: req.query.size ?? 9999,
    offset: (req.query.page ?? 0) * (req.query.size ?? 0),
  })
    .then(async (products) => {
      const response = products.map((product) => ({
        id: product?.id,
        title: product?.title ?? undefined,
        img: product?.imageurl ?? undefined,
        price: Number(product?.price).toFixed(2) ?? undefined,
        category: product?.category ?? undefined,
        tags: product?.tags ?? undefined,
      }));
      res.status(responseModels.OK.code).json({ ...responseModels.OK, products: response, numberOfTotalProducts: totalProducts });
    })
    .catch((err) => sendInternalServerError(err, res));
};

// GET PRODUCT DETAILS

export const getProductById = async (req, res) => {
  if (!hasRequiredParams([], req, res)) {
    return;
  }

  Product.findAll({
    where: { id: req.params.productId },
    attributes: ['id', 'title', 'imageurl', 'price', 'category', 'description', 'tags'],
    limit: req.query.size ?? 9999,
    offset: req.query.page ?? 0,
  })
    .then(async (products) => {
      const response = products.map((product) => ({
        id: product?.id,
        title: product?.title ?? undefined,
        img: product?.imageurl ?? undefined,
        price: Number(product?.price).toFixed(2) ?? undefined,
        category: product?.category ?? undefined,
        description: product?.description ?? undefined,
        tags: product?.tags ?? undefined,
      }));
      res.status(responseModels.OK.code).json({ ...responseModels.OK, product: response });
    })
    .catch((err) => sendInternalServerError(err, res));
};

// UPDATE PRODUCT

export const editProduct = (req, res) => {
  if (!reqHasBodyParameters(['product'], req, res)) {
    return;
  }

  const productTags = (req.body.product?.tags) ?? {};

  const productMapped =
  {
    id: req.body.product?.id,
    title: req.body.product?.title ?? undefined,
    imageurl: req.body.product?.img ?? undefined,
    price: req.body.product?.price ?? undefined,
    category: req.body.product?.category ?? undefined,
    description: req.body.product?.description ?? undefined,
    tags: "{" + productTags.toString() + "}",
  }

  Product.update(
    productMapped,
    { where: { id: req.params.productId } },
  )
    .then((rowsUpdated) => {
      res.status(responseModels.OK.code).json({ ...responseModels.OK, data: rowsUpdated });
    })
    .catch((err) => sendInternalServerError(err, res));
};

// DELETE PRODUCT

export const deleteProduct = (req, res) => {
  Product.destroy({
    where: { id: req.params.productId },
  })
    .then((rowDeleted) => {
      res.status(responseModels.OK.code).json({ ...responseModels.OK, removed: rowDeleted });
    })
    .catch((err) => sendInternalServerError(err, res));
};
