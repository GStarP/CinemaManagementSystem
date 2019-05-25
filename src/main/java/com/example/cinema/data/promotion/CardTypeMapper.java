package com.example.cinema.data.promotion;

import com.example.cinema.po.CardType;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @date 2019-5-20
 * @author zhm
 */
@Mapper
public interface CardTypeMapper {

    List<CardType> selectAllCards();

    int insertOneCard(CardType cardType);

    int deleteCardById(int cardId);

    int updateCardById(int cardId, CardType cardType);

    CardType selectCardById(int id);

}
