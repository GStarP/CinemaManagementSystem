package com.example.cinema.data.sales;

import com.example.cinema.po.Ticket;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.List;

/**
 * Created by liying on 2019/4/16.
 */
@Mapper
public interface TicketMapper {

    /**
     * 在数据库添加一张票
     * @param ticket
     * @return
     */
    int insertTicket(Ticket ticket);

    /**
     * 添加多张票
     * @param tickets
     * @return
     */
    int insertTickets(List<Ticket> tickets);

    /**
     * 删除票
     * @param ticketId
     * @return
     */
    int deleteTicket(int ticketId);

    /**
     * 删除该用户点击锁座但没有支付的电影票
     * @param userId
     * @param scheduleId
     * @return
     */
    int deleteLockedTicket(@Param("userId") int userId, @Param("scheduleId") int scheduleId);

    /**
     * 更新电影票状态
     * @param ticketId
     * @param state
     * @return
     */
    int updateTicketState(@Param("ticketId") int ticketId, @Param("state") int state);

    /**
     * 更新电影票实际支付金额
     * @param ticketId
     * @param actualPay
     * @return
     */
    int updateTicketActualPay(@Param("ticketId") int ticketId, @Param("actualPay") double actualPay);

    /**
     * 获取某场排片的全部电影票
     * @param scheduleId
     * @return
     */
    List<Ticket> selectTicketsBySchedule(int scheduleId);

    /**
     * 根据排片和座位获取电影票
     * @param scheduleId
     * @param columnIndex
     * @param rowIndex
     * @return
     */
    Ticket selectTicketByScheduleIdAndSeat(@Param("scheduleId") int scheduleId, @Param("column") int columnIndex, @Param("row") int rowIndex);

    /**
     * 根据id获取电影票
     * @param id
     * @return
     */
    Ticket selectTicketById(int id);

    /**
     * 根据用户id获取该用户的全部电影票
     * @param userId
     * @return
     */
    List<Ticket> selectTicketByUser(int userId);

    /**
     * 根据排片id获取该场的电影票数目
     * @param scheduleId
     * @return
     */
    int selectTicketNumBySchedule(@Param("scheduleId") int scheduleId);

    /**
     * 清理无效票
     */
    @Scheduled(cron = "0/1 * * * * ?")
    void cleanExpiredTicket();
}

