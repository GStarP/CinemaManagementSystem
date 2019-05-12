package com.example.cinema.blImpl.promotion;

import com.example.cinema.vo.ResponseVO;

public interface CouponServiceForBl {

    ResponseVO getCouponsByUser(int userId);

    ResponseVO issueCoupon(int couponId,int userId);

    ResponseVO getCoupon(int couponId);


}
