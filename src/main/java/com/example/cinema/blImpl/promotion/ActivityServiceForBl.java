package com.example.cinema.blImpl.promotion;

import com.example.cinema.vo.ResponseVO;

public interface ActivityServiceForBl {

    ResponseVO getActivitiesByMovie(int movieId);
}
