package com.example.cinema.data.consume;

import com.example.cinema.po.TopUpHistory;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author hxw
 * @date 2019-5-21
 */
@Mapper
public interface ConsumeMapper {

    List<TopUpHistory> getTopUpHistoryByUserId(@Param("userId") Integer userId);

}
