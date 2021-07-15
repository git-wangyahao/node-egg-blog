'use strict';

const Service = require('egg').Service;
// 获取所有用户
class Users extends Service {
  async getUsers() {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.select('wyh_users');
    return { user };
  }

  async addUser(data) {

    const user = await this.app.mysql.insert('wyh_users', data);
    return { user };
  }

  async delUser(user_id) {
    const user = await this.app.mysql.delete('wyh_users', { user_id });
    return { user };
  }

  async updateUser(row) {
    console.log('row', row);
    const options = {
      where: {
        user_id: row.user_id,
      },
    };
    const user = await this.app.mysql.update('wyh_users', row, options);
    return { user };
  }

  async findUser(user_id) {
    const user = await this.app.mysql.get('wyh_users', { user_id });
    return { user };
  }

  // 分页获取用户
  async getUsersByParams(params) {


    const user = await this.app.mysql.select('wyh_users', params);

    // const user = await this.app.mysql.select('wyh_users');
    return { user };
  }

}

module.exports = Users;
