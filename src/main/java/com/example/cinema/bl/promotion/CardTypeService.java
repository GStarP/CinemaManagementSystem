package com.example.cinema.bl.promotion;

import com.example.cinema.vo.CardTypeForm;
import com.example.cinema.vo.ResponseVO;

/**
 * @date 2019-5-20
 * @author zhm
 */
public interface CardTypeService {
    ResponseVO getCards();

    ResponseVO publishCard(CardTypeForm cardTypeForm);

    ResponseVO deleteCard(int cardId);

    ResponseVO updateCard(int cardId, CardTypeForm cardTypeForm);
}
