const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

// const pool = require('./../libs/postgres.pool')
const sequelize = require('./../libs/sequelize')

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
    // this.pool = pool;
    // this.pool.on('error', (err) => console.error(err));
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.avatar(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }


  // this find is using sequelize
  async find () {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return data;
  }


  // // this find is using POOL conexion
  // async find () {
  //   const query = 'SELECT * FROM tasks';
  //   const response = await this.pool.query(query);
  //   return response.rows;
  // }



  // find() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.products);
  //     }, 3000);
  //   });
  //   // return this.products;
  // }

  async fineOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('no product found in the DB');
    }
    if (product.isBlock) {
      throw boom.conflict('This product IS BLOCK in DB');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found in DB');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
