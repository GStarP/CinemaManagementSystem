package com.example.cinema.blImpl.sales;

import com.example.cinema.bl.promotion.ActivityService;
import com.example.cinema.bl.promotion.CouponService;
import com.example.cinema.bl.sales.TicketService;
import com.example.cinema.blImpl.management.hall.HallServiceForBl;
import com.example.cinema.blImpl.management.schedule.ScheduleServiceForBl;
import com.example.cinema.data.sales.TicketMapper;
import com.example.cinema.po.*;
import com.example.cinema.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by liying on 2019/4/16.
 */
@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    TicketMapper ticketMapper;
    @Autowired
    ScheduleServiceForBl scheduleService;
    @Autowired
    HallServiceForBl hallService;
    @Autowired
    CouponService couponService;
    @Autowired
    ActivityService activityService;

    @Override
    @Transactional
    public ResponseVO addTicket(TicketForm ticketForm) {
        List<Ticket> tickets = new ArrayList<>();
        List<SeatForm> seats = ticketForm.getSeats();
        for (SeatForm seat: seats){
            Ticket ticket = new Ticket();
            ticket.setUserId(ticketForm.getUserId());
            ticket.setScheduleId(ticketForm.getScheduleId());
            ticket.setRowIndex(seat.getRowIndex());
            ticket.setColumnIndex(seat.getColumnIndex());
            ticket.setState(0);
            tickets.add(ticket);
        }
        try {
            ticketMapper.insertTickets(tickets);
            return getOtherInfo(ticketForm);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseVO.buildFailure("失败");
        }
    }

    @Override
    @Transactional
    public ResponseVO completeTicket(List<Integer> id, int couponId) {
        return null;
    }

    @Override
    public ResponseVO getBySchedule(int scheduleId) {
        try {
            List<Ticket> tickets = ticketMapper.selectTicketsBySchedule(scheduleId);
            ScheduleItem schedule=scheduleService.getScheduleItemById(scheduleId);
            Hall hall=hallService.getHallById(schedule.getHallId());
            int[][] seats=new int[hall.getRow()][hall.getColumn()];
            tickets.stream().forEach(ticket -> {
                seats[ticket.getRowIndex()][ticket.getColumnIndex()]=1;
            });
            ScheduleWithSeatVO scheduleWithSeatVO=new ScheduleWithSeatVO();
            scheduleWithSeatVO.setScheduleItem(schedule);
            scheduleWithSeatVO.setSeats(seats);
            return ResponseVO.buildSuccess(scheduleWithSeatVO);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseVO.buildFailure("失败");
        }
    }

    @Override
    public ResponseVO getTicketByUser(int userId) {
        return null;

    }

    @Override
    @Transactional
    public ResponseVO completeByVIPCard(List<Integer> id, int couponId) {
        return null;
    }

    @Override
    public ResponseVO cancelTicket(List<Integer> id) {
        return null;
    }


    private ResponseVO getOtherInfo(TicketForm ticketForm) {
        try {
            TicketWithCouponVO ticketWithCouponVO = new TicketWithCouponVO();
            List<TicketVO> ticketVOList = new ArrayList<>();
            for (SeatForm seat: ticketForm.getSeats()){
                ticketVOList.add(ticketMapper.selectTicketByScheduleIdAndSeat(ticketForm.getScheduleId(), seat.getColumnIndex(), seat.getRowIndex()).getVO());
            }
            ticketWithCouponVO.setTicketVOList(ticketVOList);
            ticketWithCouponVO.setTotal(ticketVOList.size() * scheduleService.getScheduleItemById(ticketForm.getScheduleId()).getFare());
            ticketWithCouponVO.setCoupons((List<Coupon>) couponService.getCouponsByUser(ticketForm.getUserId()).getContent());
            ticketWithCouponVO.setActivities((List<Activity>) activityService.getActivities().getContent());
            return ResponseVO.buildSuccess(ticketWithCouponVO);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseVO.buildFailure("失败");
        }
    }
}
