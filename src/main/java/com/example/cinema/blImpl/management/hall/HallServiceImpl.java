package com.example.cinema.blImpl.management.hall;

import com.example.cinema.bl.management.hall.HallService;
import com.example.cinema.data.management.HallMapper;
import com.example.cinema.po.Hall;
import com.example.cinema.vo.HallVO;
import com.example.cinema.vo.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @author fjj, chph
 * @date 2019/4/12 2:01 PM
 */
@Service
public class HallServiceImpl implements HallService, HallServiceForBl {
    @Autowired
    private HallMapper hallMapper;

    @Override
    public ResponseVO searchAllHall() {
        try {
            return ResponseVO.buildSuccess(hallList2HallVOList(hallMapper.selectAllHall()));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseVO.buildFailure("失败");
        }
    }

    @Override
    public ResponseVO addHall(HallVO hallVO) {
        Hall hall = new Hall();
        hall.setName(hallVO.getName());
        hall.setScale(hallVO.getScale());
        hall.setGeneratedSeats(hallVO.getSeats());
        // result是返回插入结果的影响条数，为1时说明插入成功
        int result = hallMapper.addHall(hall);
        if (result == 1) return ResponseVO.buildSuccess();
        else return ResponseVO.buildFailure("录入影厅信息失败！");
    }

    @Override
    public ResponseVO updateHall(HallVO hallVO) {
        Hall hall = new Hall();
        hall.setId(hallVO.getId());
        hall.setName(hallVO.getName());
        hall.setScale(hallVO.getScale());
        hall.setGeneratedSeats(hallVO.getSeats());
        // result是返回更新结果的影响条数，为1时说明更新成功
        int result = hallMapper.updateHall(hall);
        if (result == 1) return ResponseVO.buildSuccess();
        else return ResponseVO.buildFailure("更新影厅信息失败！");
    }

    @Override
    public ResponseVO removeHall(int hallId) {
        // result是返回删除结果的影响条数，为1时说明删除成功
        int result = hallMapper.removeHallById(hallId);
        if (result == 1) return ResponseVO.buildSuccess();
        else return ResponseVO.buildFailure("删除影厅失败！");
    }

    @Override
    public Hall getHallById(int id) {
        try {
            return hallMapper.selectHallById(id);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    private List<HallVO> hallList2HallVOList(List<Hall> hallList){
        List<HallVO> hallVOList = new ArrayList<>();
        for(Hall hall : hallList){
            hallVOList.add(new HallVO(hall));
        }
        return hallVOList;
    }
}
