package com.example.cinema.po;

/**
 * @author hxw
 * @date 2019/5/14
 */
public class User {
    private Integer id;
    private String username;
    private String password;
    /**
     * 身份
     * 0-观众 1-影院员工 2-管理员
     */
    private Integer auth;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getAuth() {
        return auth;
    }

    public void setAuth(Integer auth) {
        this.auth = auth;
    }
}
