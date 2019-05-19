package com.example.cinema.data.user;

import com.example.cinema.po.User;
import com.example.cinema.vo.UserForm;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * @author hxw
 * @date 2019/5/19
 */
@Mapper
public interface AccountMapper {

    /**
     * 创建一个新的账号
     * @param username
     * @param password
     * @return
     */
    public int createNewAccount(@Param("username") String username, @Param("password") String password, @Param("auth") Integer auth);

    /**
     * 根据用户名查找账号
     * @param username
     * @return
     */
    public User getAccountByName(@Param("username") String username);

    /**
     * 更新密码
     * @param userForm
     * @return
     */
    public int updatePassword(@Param("userForm") UserForm userForm);
}
