package com.example.cinema.bl.promotion;

import com.example.cinema.vo.ActivityForm;
import com.example.cinema.vo.ResponseVO;

/**
 * Created by liying on 2019/4/20.
 */
public interface ActivityService {

    /**
     * 新增一个活动
     * @param activityForm
     * @return
     */
    ResponseVO publishActivity(ActivityForm activityForm);

    /**
     * 获取全部活动
     * @return
     */
    ResponseVO getActivities();

    /**
     * 删除活动
     * @param activityId
     * @return
     */
    ResponseVO deleteActivity(int activityId);

    /**
     * 根据id获取活动
     * @param activityId
     * @return
     */
    ResponseVO getActivityById(int activityId);

    /**
     * 根据电影id获取此电影的全部活动
     * @param movieId
     * @return
     */
    ResponseVO getActivitiesByMovie(int movieId);

}
