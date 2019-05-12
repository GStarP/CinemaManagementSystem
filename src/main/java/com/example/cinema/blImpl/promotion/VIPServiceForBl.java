package com.example.cinema.blImpl.promotion;

import com.example.cinema.vo.ResponseVO;

public interface VIPServiceForBl {

    ResponseVO getCardByUserId(int userId);

    ResponseVO payByCard(int id, double balance);

}
