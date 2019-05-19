package com.example.cinema.vo;

import com.example.cinema.po.Movie;

/**
 * @date 2019-5-19
 * @author CZ
 */
public class RefundVO {

    private int id;
    /**
     * 适用电影
     */
    private Movie movie;

    /**
     * 适用时间，电影开场前多久
     */
    private int time;

    /**
     * 折算策略
     */
    private int price;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
