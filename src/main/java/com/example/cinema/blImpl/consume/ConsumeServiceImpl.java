package com.example.cinema.blImpl.consume;

import com.example.cinema.bl.consume.ConsumeService;
import com.example.cinema.data.consume.ConsumeMapper;
import com.example.cinema.vo.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author hxw
 * @date 2019-5-21
 */
@Service
public class ConsumeServiceImpl implements ConsumeService{

    @Autowired
    private ConsumeMapper consumeMapper;

    @Override
    public ResponseVO getAllTopUpHistory(Integer userId) {
        try {
            return ResponseVO.buildSuccess(consumeMapper.getTopUpHistoryByUserId(userId));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseVO.buildFailure("获取充值记录失败!");
        }
    }
}
