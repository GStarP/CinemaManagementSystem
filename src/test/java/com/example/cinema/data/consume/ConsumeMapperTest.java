package com.example.cinema.data.consume;

import com.example.cinema.CinemaApplication;
import com.example.cinema.data.consume.ConsumeMapper;
import com.example.cinema.po.ConsumeHistory;
import com.example.cinema.po.TopUpHistory;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@SpringBootTest(classes = CinemaApplication.class)
@RunWith(SpringJUnit4ClassRunner.class)
public class ConsumeMapperTest {

    @Autowired
    private ConsumeMapper consumeMapper;

    @Test
    public void getTopUpHistoryByUserIdTest() {
        List<TopUpHistory> histories = consumeMapper.getTopUpHistoryByUserId(12);
        Assert.assertEquals(3,histories.size());
    }

    @Test
    public void getConsumeHistoryByUserIdTest() {
        List<ConsumeHistory> histories = consumeMapper.getConsumeHistoryByUserId(15);
        Assert.assertEquals(4,histories.size());
    }

    @Test
    public void getConsumeHistoryByIdTest() {
        ConsumeHistory history = consumeMapper.getConsumeHistoryById(1);
        Assert.assertEquals("会员卡",history.getConsumeType());
        Assert.assertEquals(20.5,history.getMoney(),0.00);
    }
}
