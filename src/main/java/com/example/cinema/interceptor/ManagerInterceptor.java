package com.example.cinema.interceptor;

import com.example.cinema.config.InterceptorConfiguration;
import com.example.cinema.po.User;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class ManagerInterceptor implements HandlerInterceptor{
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (null == request.getSession().getAttribute(InterceptorConfiguration.SESSION_KEY)) {
            response.sendRedirect("/index");
        } else if (((User)request.getSession().getAttribute(InterceptorConfiguration.SESSION_KEY)).getAuth() == 0){
            response.sendRedirect("/user/home");
        } else if (((User)request.getSession().getAttribute(InterceptorConfiguration.SESSION_KEY)).getAuth() == 1) {
            response.sendRedirect("/admin/movie/manage");
        }
        return true;
    }
}
