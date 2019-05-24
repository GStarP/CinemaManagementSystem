package com.example.cinema.blImpl.management.movie;

import com.example.cinema.vo.ResponseVO;

/**
 * @author fjj
 * @date 2019/4/28 12:29 AM
 */
public interface MovieServiceForBl {
    /**
     * 根据id查找电影
     * @param id
     * @return
     */
    ResponseVO getMovieById(int id);
}
