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

}
