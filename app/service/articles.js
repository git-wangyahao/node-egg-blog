'use strict';

const Service = require('egg').Service;
// 获取所有用户
class Articles extends Service {
  async index() {
    const articles = await this.app.mysql.select('wyh_articles');
    return { articles };
  }

  async show(article_id) {
    const articles = await this.app.mysql.get('wyh_articles', { article_id });
    return { articles };
  }


  async create(data) {
    const articles = await this.app.mysql.insert('wyh_articles', data);
    return { articles };
  }

  async update(row) {
    const options = {
      where: {
        article_id: row.article_id,
        user_id: row.user_id,
      },
    };
    const articles = await this.app.mysql.update('wyh_articles', row, options);
    return { articles };
  }

  async destroy(article_id) {
    const articles = await this.app.mysql.delete('wyh_articles', { article_id });
    return { articles };
  }


}

module.exports = Articles;
