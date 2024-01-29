const express = require('express');
// const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    name:"thios is name",
    price: 6545456
  })
})


router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    categoryName:"Juancito",
    email: "qsdfsdf@sdf.com"
  })
})

module.exports = router;
