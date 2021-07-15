'use strict';

const Controller = require('egg').Controller;

class Sorts extends Controller {
  // 查询所有
  async index() {
    const { ctx } = this;
    const sorts = await ctx.service.sorts.index();
    ctx.body = sorts;
  }
  // 查询
  async show() {
    const { ctx } = this;
    const sorts = await ctx.service.sorts.show(ctx.params.id);
    ctx.body = sorts;
  }
  // 增加
  async create() {
    const { ctx } = this;
    const sorts = await ctx.service.sorts.create(ctx.request.body);
    ctx.body = sorts;
  }
  // 修改
  async update() {
    const { ctx } = this;
    const sorts = await ctx.service.sorts.update(ctx.request.body);
    ctx.body = sorts;
  }
  // 删除
  async destroy() {
    const { ctx } = this;
    const sorts = await ctx.service.sorts.destroy(ctx.params.id);
    ctx.body = sorts;
  }

}

module.exports = Sorts;

