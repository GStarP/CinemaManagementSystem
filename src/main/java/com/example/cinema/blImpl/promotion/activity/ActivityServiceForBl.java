package com.example.cinema.blImpl.promotion.activity;

import com.example.cinema.po.Activity;
import com.example.cinema.vo.ResponseVO;

import java.util.List;

public interface ActivityServiceForBl {

    /**
     * 根据电影id获得活动
     * @param movieId
     * @return
     */
    ResponseVO getActivitiesByMovie(int movieId);

    /**
     * 获取所有活动
     * @return
     */
    List<Activity> getActivityList();
}
