const Service = require('egg').Service;
// 获取所有用户
class Articles extends Service {
    async index()  {
       
    };
    
    async new()  {
        const { ctx } = this;
        ctx.body = `search: ${ctx.params.id}new`;
    };
    
     async create()  {
        const { ctx } = this;
        ctx.body = `search: ${ctx.params.id}：create`;
    };
    
     async show() {
        const { ctx } = this;
        ctx.body = `search: ${ctx.params.id}`;
    };
    
    async edit() {
        const { ctx } = this;
        ctx.body = `search: ${ctx.params.id}：edit`;
    };
    
   async update() {
        const { ctx } = this;
        ctx.body = `search: ${ctx.params.id}`;
    };
    
    async destroy(){
        const { ctx } = this;
        ctx.body = `search: ${ctx.params.id}`;
    };


}

module.exports = Articles