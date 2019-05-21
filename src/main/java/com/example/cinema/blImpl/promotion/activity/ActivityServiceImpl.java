package com.example.cinema.blImpl.promotion.activity;

import com.example.cinema.bl.promotion.ActivityService;
import com.example.cinema.bl.promotion.CouponService;
import com.example.cinema.data.promotion.ActivityMapper;
import com.example.cinema.po.Activity;
import com.example.cinema.po.Coupon;
import com.example.cinema.vo.ActivityForm;
import com.example.cinema.vo.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by liying on 2019/4/20.
 */
@Service
public class ActivityServiceImpl implements ActivityService, ActivityServiceForBl {

    @Autowired
    ActivityMapper activityMapper;
    @Autowired
    CouponService couponService;

    @Override
    @Transactional
    public ResponseVO publishActivity(ActivityForm activityForm) {
        try {
            ResponseVO vo = couponService.addCoupon(activityForm.getCouponForm());
            Coupon coupon = (Coupon) vo.getContent();
            Activity activity = new Activity();
            activity.setName(activityForm.getName());
            activity.setDescription(activityForm.getDescription()==null||activityForm.getDescription().equals("")? activityForm.getName(): activityForm.getDescription());
            activity.setStartTime(activityForm.getStartTime());
            activity.setEndTime(activityForm.getEndTime());
            activity.setTargetAmount(activityForm.getTargetAmount());
            activity.setCoupon(coupon);
            activityMapper.insertActivity(activity);
            if(activityForm.getMovieList()!=null&&activityForm.getMovieList().size()!=0){
                activityMapper.insertActivityAndMovie(activity.getId(), activityForm.getMovieList());
            }
            return ResponseVO.buildSuccess(activityMapper.selectById(activity.getId()));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseVO.buildFailure("失败");
        }
    }

    @Override
    public ResponseVO getActivities() {
        try {
            return ResponseVO.buildSuccess(activityMapper.selectActivities().stream().map(Activity::getVO));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseVO.buildFailure("失败");
        }
    }

    @Override
    public ResponseVO changeActivity(int activityId, ActivityForm activityForm) {
        //TODO:待写
        return ResponseVO.buildSuccess();
    }

    @Override
    public ResponseVO deleteActivity(int activityId) {
        try{
            activityMapper.deleteActivityById(activityId);
            activityMapper.deleteActivityAndMovie(activityId);
            return ResponseVO.buildSuccess();
        }catch (Exception e){
            e.printStackTrace();
            return ResponseVO.buildFailure("删除活动失败");
        }
    }

    @Override
    public ResponseVO getActivitiesByMovie(int movieId) {
        try {
            return ResponseVO.buildSuccess(activityMapper.selectActivitiesByMovie(movieId));
        }catch (Exception e){
            e.printStackTrace();
            return ResponseVO.buildFailure("失败");
        }
    }

    @Override
    public List<Activity> getActivityList() {
        try {
            return activityMapper.selectActivities();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
