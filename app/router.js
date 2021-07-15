'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getUsers', controller.user.getUsers); // 获取所有用户信息
  router.post('/getUsersByParams', controller.user.getUsersByParams);
  router.get('/findUser', controller.user.findUser);
  router.post('/addUser', controller.user.addUser); // 添加用户
  router.delete('/delUser/:id', controller.user.delUser); // 删除用户
  router.put('/updateUser', controller.user.updateUser); // 添加用户
  router.resources('posts', '/api/posts', controller.posts);
  router.resources('articles', '/api/articles', controller.articles);
  router.resources('sorts', '/api/sorts', controller.sorts);
};

