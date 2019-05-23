package com.example.cinema.data.management;

import com.example.cinema.po.Hall;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author fjj
 * @date 2019/4/11 3:46 PM
 */
@Mapper
public interface HallMapper {
    /**
     * 查询所有影厅信息
     * @return
     */
    List<Hall> selectAllHall();

    /**
     * 根据id查询影厅
     * @return
     */
    Hall selectHallById(@Param("hallId") int hallId);

    /**
     * 添加影厅记录
     * @param hall
     * @return
     */
    int addHall(Hall hall);

    /**
     * 根据影厅ID删除影厅记录
     * @param hallId
     * @return
     */
    int removeHallById(@Param("hallId") int hallId);

    /**
     * 更新影厅信息
     * @param hall
     * @return
     */
    int updateHall(Hall hall);

    /**
     * 除了hallIds的影厅，获取其他的影厅信息
     * @param hallIds
     * @return
     */
    List<Hall> getHallsExcept(@Param("hallIds") List<Integer> hallIds);
}
