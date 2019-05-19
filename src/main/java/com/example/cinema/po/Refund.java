package com.example.cinema.po;

/**
 * @date 2019-5-19
 * @author CZ
 */
public class Refund {

    private int id;
    /**
     * 适用电影
     */
    private int movieId;

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

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
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
