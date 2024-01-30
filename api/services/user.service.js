const boom = require('@hapi/boom');

// const getConnection = require('../libs/postgres')
const { models } = require('./../libs/sequelize')

class UserService {
  constructor() {}

  // async create(data) {
  //   const newUser = await models.User.create(data);
  //   return newUser;
  // }


  async create(data) {
    return data;
  }

  async find() {
    const response = await models.User.findAll();
    // const rta = await client.query('SELECT * FROM tasks');
    return response;
  }

  // // this find is using  ===> const getConnection = require('../libs/postgres')
  // async find() {
  //   const client = await getConnection();
  //   const rta = await client.query('SELECT * FROM tasks');
  //   return rta.rows;
  // }


  // async find() {
  //   const rta = await models.User.findAll();
  //   return rta;
  // }

  // async findOne(id) {
  //   const user = await models.User.findByPk(id);
  //   if (!user) {
  //     throw boom.notFound('user not found!!!');
  //   }
  //   return user;
  // }

  // async update(id, changes) {
  //   const user = await this.findOne(id);
  //   const rta = await user.update(changes);
  //   return rta;
  // }

  // async delete(id) {
  //   const user = await this.findOne(id);
  //   await user.destroy();
  //   return { id };
  // }
}

module.exports = UserService;
