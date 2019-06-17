package com.example.cinema.data.promotion;

import com.example.cinema.po.Activity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by liying on 2019/4/20.
 */
@Mapper
public interface ActivityMapper {

    /**
     * 新增一条活动
     * @param activity
     * @return
     */
    int insertActivity(Activity activity);

    /**
     * 新增多个活动，活动相同电影不同
     * @param activityId
     * @param movieId
     * @return
     */
    int insertActivityAndMovie(@Param("activityId") int activityId,@Param("movieId") List<Integer> movieId);

    /**
     * 获取所有活动
     * @return
     */
    List<Activity> selectActivities();

    /**
     * 根据电影id获取此电影的所有活动
     * @param movieId
     * @return
     */
    List<Activity> selectActivitiesByMovie(int movieId);

    /**
     * 根据id获取活动
     * @param id
     * @return
     */
    Activity selectById(int id);

    /**
     * 获取没有电影的活动
     * @return
     */
    List<Activity> selectActivitiesWithoutMovie();

    /**
     * 根据id删除活动
     * @param id
     */
    void deleteActivityById(int id);

    /**
     * 根据活动id删除此活动关联电影信息
     * @param id
     */
    void deleteActivityAndMovie(int id);






}
