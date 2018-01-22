package cn.itcast.cloud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.itcast.cloud.dao.LocationInfoDao;
import cn.itcast.cloud.domain.LocationInfo;

@Service
public class LocationInfoServiceImpl implements LocationInfoService {


	@Autowired
    private LocationInfoDao locationInfoDao;
	
	public List<LocationInfo> findAll() {
		return locationInfoDao.findAll();
	}

}
