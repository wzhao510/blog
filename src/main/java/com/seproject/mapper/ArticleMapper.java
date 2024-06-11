package com.seproject.mapper;

import com.seproject.pojo.Article;
import com.seproject.pojo.Category;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ArticleMapper {
    //新增
    @Insert("insert into article(title,content,cover_img,state,category_id,create_user,create_time,update_time) " +
            "values(#{title},#{content},#{coverImg},#{state},#{categoryId},#{createUser},#{createTime},#{updateTime})")
    void add(Article article);

    List<Article> list(Integer userId, Integer categoryId, String state);

    //根据id查询
    @Select("select * from article where id = #{id}")
    Article findById(Integer id);

    void update(Article article);

    //更新
    @Update("update article set title=#{title},content=#{content},cover_img=#{coverImg},state=#{state},update_time=#{updateTime} where id=#{id}")
    void update(Category category);

    //根据id删除
    @Delete("delete from article where id=#{id}")
    void deleteById(Integer id);

    List<Article> listAll(Integer categoryId, String state);
}
