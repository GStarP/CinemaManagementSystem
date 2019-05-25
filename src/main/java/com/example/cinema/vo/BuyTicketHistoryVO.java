package com.example.cinema.vo;

import java.util.Date;

/**
 * @author hxw
 * @date 2019-5-22
 */
public class BuyTicketHistoryVO extends BriefConsumeHisVO{
    /**
     * 电影名称
     */
    private String movieName;
    /**
     * 影厅名称
     */
    private String hallName;

    /**
     * 座位列号
     */
    private int columnIndex;
    /**
     * 座位排号
     */
    private int rowIndex;
    /**
     * 放映时间
     */
    private Date startTime;

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getHallName() {
        return hallName;
    }

    public void setHallName(String hallName) {
        this.hallName = hallName;
    }

    public int getColumnIndex() {
        return columnIndex;
    }

    public void setColumnIndex(int columnIndex) {
        this.columnIndex = columnIndex;
    }

    public int getRowIndex() {
        return rowIndex;
    }

    public void setRowIndex(int rowIndex) {
        this.rowIndex = rowIndex;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }
}
