1、user创建时间未处理
2、在做用户删除的时候，报了以下错误
````javascript
     nodejs.ER_ROW_IS_REFERENCED_2Error: ER_ROW_IS_REFERENCED_2: Cannot delete or update a parent row: a foreign key constraint fails (`wangyahao_blog`.`zj_articles`, CONSTRAINT `zj_articles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `zj_users` (`user_id`))
````
3、此错误出现的原因是：由于我删除的用户被文章引用了id，所以导致删除失败，问题为解决，暂放置

4、安装egg-swagger-doc 作为接口文档 最后导入到 yapi查看
教程参考网址：https://blog.csdn.net/johnzhangqi/article/details/107690304
