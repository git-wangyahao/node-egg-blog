'use strict';

const Controller = require('egg').Controller;

class Articles extends Controller {
  // 查询所有
  async index() {
    const { ctx } = this;
    const articles = await ctx.service.articles.index();
    ctx.body = articles;
  }
  // 查询
  async show() {
    const { ctx } = this;
    const articles = await ctx.service.articles.show(ctx.params.id);
    ctx.body = articles;
  }
  // 增加
  async create() {
    const { ctx } = this;
    const articles = await ctx.service.articles.create(ctx.request.body);
    ctx.body = articles;
  }
  // 修改
  async update() {
    const { ctx } = this;
    console.log('ctx.request.body', ctx.request.body);
    const articles = await ctx.service.articles.update(ctx.request.body);
    console.log('article', articles);
    ctx.body = articles;
  }
  // 删除
  async destroy() {
    const { ctx } = this;
    const articles = await ctx.service.articles.destroy(ctx.params.id);
    ctx.body = articles;
  }

}

module.exports = Articles;
