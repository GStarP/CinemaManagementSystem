package com.example.cinema.data.consume;

import com.example.cinema.po.ConsumeHistory;
import com.example.cinema.po.TopUpHistory;
import com.example.cinema.vo.TotalConsumeUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.sql.Timestamp;
import java.util.List;

/**
 * @author hxw
 * @date 2019-5-21
 */
@Mapper
public interface ConsumeMapper {

    List<TopUpHistory> getTopUpHistoryByUserId(@Param("userId") Integer userId);

    List<ConsumeHistory> getConsumeHistoryByUserId(@Param("userId") Integer userId);

    ConsumeHistory getConsumeHistoryById(@Param("id") Integer id);

    int insertTopUpHistory(@Param("user_id") Integer userId, @Param("money") Double money,
                           @Param("discount") Double discount, @Param("balance") Double balance,
                           @Param("time") Timestamp time);

    int insertConsumeHistory(@Param("user_id") Integer userId, @Param("money") Double money,
                             @Param("discount") Double discount, @Param("consumeType") String consumeType,
                             @Param("type") Integer type, @Param("contentId") Integer contentId);

    List<TotalConsumeUser> selectConsumeQulifiedUsers(@Param("totalConsume") Double totalConsume);
}
