'use strict';

const Controller = require('egg').Controller;

class Posts extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'search: 你好啊';
  }

  async new() {
    const { ctx } = this;
    ctx.body = `search: ${ctx.params.id}new`;
  }

  async create() {
    const { ctx } = this;
    ctx.body = `search: ${ctx.params.id}：create`;
  }

  async show() {
    const { ctx } = this;
    ctx.body = `search: ${ctx.params.id}`;
  }

  async edit() {
    const { ctx } = this;
    ctx.body = `search: ${ctx.params.id}：edit`;
  }

  async update() {
    const { ctx } = this;
    ctx.body = `search: ${ctx.params.id}`;
  }

  async destroy() {
    const { ctx } = this;
    ctx.body = `search: ${ctx.params.id}`;
  }

}

module.exports = Posts;

