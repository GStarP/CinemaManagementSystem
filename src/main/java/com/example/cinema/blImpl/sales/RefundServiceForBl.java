package com.example.cinema.blImpl.sales;

import com.example.cinema.po.Refund;

import java.util.List;

public interface RefundServiceForBl {

    /**
     * 根据电影id获取退票策略
     * @param movieId
     * @return
     */
    List<Refund> getRefundByMovieId(int movieId);

}
