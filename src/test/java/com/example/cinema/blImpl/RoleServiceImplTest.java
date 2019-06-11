package com.example.cinema.blImpl;

import com.example.cinema.CinemaApplication;
import com.example.cinema.bl.user.RoleService;
import com.example.cinema.vo.ResponseVO;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@SpringBootTest(classes = CinemaApplication.class)
@RunWith(SpringJUnit4ClassRunner.class)
public class RoleServiceImplTest {

    @Autowired
    RoleService roleService;

    @Test
    public void getAdaptableRolesTest(){
        ResponseVO responseVO=roleService.getAdaptableRoles(0);
        Assert.assertEquals(0,responseVO.getContent());
    }
}
