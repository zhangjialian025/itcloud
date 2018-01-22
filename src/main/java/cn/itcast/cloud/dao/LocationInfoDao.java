package cn.itcast.cloud.dao;

import java.util.List;

import cn.itcast.cloud.domain.LocationInfo;

public interface LocationInfoDao {
	/**
	 * 查找所有的省份信息
	 * @return
	 */
	List<LocationInfo> findAll();
}
