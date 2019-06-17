package com.example.cinema.data.sales;

import com.example.cinema.po.Refund;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @date 2019-5-19
 * @author CZ
 */
@Mapper
public interface RefundMapper {

    /**
     * 获取全部退票策略
     * @return
     */
    List<Refund> selectRefund();

    /**
     * 新增一条退票策略
     * @param refund
     * @return
     */
    int insertRefund(Refund refund);

    /**
     * 根据id删除退票策略
     * @param refundId
     * @return
     */
    int deleteRefundById(int refundId);

    /**
     * 根据电影id获取该电影的退票策略
     * @param movieId
     * @return
     */
    List<Refund> selectRefundByMovieId(int movieId);

    /**
     * 根据id获取退票策略
     * @param refundId
     * @return
     */
    Refund selectRefundById(int refundId);
}
