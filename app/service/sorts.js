'use strict';

const Service = require('egg').Service;
// 获取所有用户
class Sorts extends Service {
  async index() {
    const sorts = await this.app.mysql.select('wyh_sorts');
    return { sorts };
  }

  async show(article_id) {
    const sorts = await this.app.mysql.get('wyh_sorts', { article_id });
    return { sorts };
  }


  async create(data) {
    const sorts = await this.app.mysql.insert('wyh_sorts', data);
    return { sorts };
  }

  async update(row) {
    const options = {
      where: {
        article_id: row.sort_id,
        parents_sort_id: row.parents_sort_id,
      },
    };
    const sorts = await this.app.mysql.update('wyh_sorts', row, options);
    return { sorts };
  }

  async destroy(article_id) {
    const sorts = await this.app.mysql.delete('wyh_sorts', { article_id });
    return { sorts };
  }


}

module.exports = Sorts;
