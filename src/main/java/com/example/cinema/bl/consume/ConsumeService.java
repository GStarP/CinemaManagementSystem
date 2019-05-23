package com.example.cinema.bl.consume;

import com.example.cinema.vo.ResponseVO;

/**
 * @author hxw
 * @date 2019-5-21
 */
public interface ConsumeService {

    /**
     * 获取用户全部的充值记录
     * @param userId
     * @return
     */
    ResponseVO getAllTopUpHistory(Integer userId);

    /**
     * 获取简略消费记录信息
     * @param userId
     * @return
     */
    ResponseVO getBriefConsumeHis(Integer userId);

    /**
     * 获取消费记录详细信息
     * @param id
     * @return
     */
    ResponseVO getConsumeHisDetail(Integer id);

}
