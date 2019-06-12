package com.example.cinema.bl.promotion;

import com.example.cinema.po.VIPCard;
import com.example.cinema.vo.VIPCardForm;
import com.example.cinema.vo.ResponseVO;



/**
 * Created by liying on 2019/4/14.
 */

public interface VIPService {

    ResponseVO addVIPCard(int userId, int cardTypeId);

    ResponseVO getCardById(int id);

    ResponseVO charge(VIPCardForm vipCardForm);

    ResponseVO getCardByUserId(int userId);

    ResponseVO changeVIPCard(int cardId, int cardTypeId);

    VIPCard getSingleCard(int id);
}
