package com.example.cinema.vo;

import java.util.List;

/**
 * @date 2019-5-19
 * @author CZ
 */
public class RefundForm {

    /**
     * 适用电影列表
     */
    private List<Integer> movieList;

    /**
     * 适用时间，电影开场前多久
     */
    private int time;

    /**
     * 折算策略
     */
    private int price;

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public List<Integer> getMovieList() {
        return movieList;
    }

    public void setMovieList(List<Integer> movieList) {
        this.movieList = movieList;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

}
