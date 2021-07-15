'use strict';

const Controller = require('egg').Controller;

/**
   *  @Controller用户管理
  */
class Users extends Controller {
  /**
   * @summary 获取所有用户
   * @description 获取所有用户
   * @router GET /getUsers
   * @response 200 请求成功
   */

  async getUsers() {
    const { ctx } = this;
    const user = await ctx.service.user.getUsers();
    const successModel = {
      code: 200,
      message: '操作成功',
      data: null,
    };
    successModel.data = user.user;
    ctx.body = successModel;
  }


  async addUser() {
    const { ctx } = this;
    console.log('ctx.request.body', ctx.request.body);
    const user = await ctx.service.user.addUser(ctx.request.body);
    const res = {
      code: 200,
      message: '添加成功',
      data: null,
    };
    ctx.body = user.user.serverStatus === 2 ? res : '1000';
  }

  async delUser() {
    const { ctx } = this;
    const user = await ctx.service.user.delUser(ctx.params.id);
    const res = {
      code: 200,
      message: '删除成功',
      data: null,
    };
    ctx.body = user.user.serverStatus === 2 ? res : '1001';
  }

  async updateUser() {
    const { ctx } = this;
    const user = await ctx.service.user.updateUser(ctx.request.body);
    ctx.body = user;
  }

  async findUser() {
    const { ctx } = this;
    const user = await ctx.service.user.findUser(ctx.query.id);
    ctx.body = user;
  }

  async getUsersByParams() {
    const { ctx } = this;

    const { current, pageSize, username } = ctx.request.body;
    const currentPage = current * pageSize - pageSize;
    const size = pageSize;
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    // offset=page*limit-limit

    //     **
    //  * 分页查询
    //  * @param offset 起始页
    //  * @param limit 每页展示条数
    //  * offset=page*limit-limit
    //  */
    // const query = {
    //   offset: app.toInt(pageNum) * app.toInt(pageSize) - app.toInt(pageSize),
    //   limit: app.toInt(pageSize)
    // };


    const params = {
      where: {}, // WHERE 条件
      // columns: ['author', 'title'], // 要查询的表字段
      // orders: [['created_at','desc'], ['id','desc']], // 排序方式
      // pageSize 默认 10
      // currentPage  默认1
      limit: size, // 返回数据量
      offset: currentPage, // 数据偏移量
    };
    let sql = null;
    if (username) {
      params.where.user_name = username;
      sql = `SELECT count(*) FROM wyh_users WHERE user_name = '${username}'`;
    } else {
      sql = 'SELECT count(*) FROM wyh_users';
    }


    const user = await ctx.service.user.getUsersByParams(params);

    const total = await this.app.mysql.query(sql);

    const successModel = {
      code: 200,
      message: '操作成功',
      data: {
        list: user.user,
        pageSize: size,
        currentPage: current,
        total: total[0]['count(*)'],
      },
    };

    ctx.body = successModel;
  }


}

module.exports = Users;
