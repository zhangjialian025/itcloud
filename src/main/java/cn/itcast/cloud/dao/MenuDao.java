package cn.itcast.cloud.dao;

import java.util.List;

import cn.itcast.cloud.domain.Menu;


public interface MenuDao {

	List<Menu> findPrimaryMenu();

	List<Menu> findByParentId(Long parentId);

}
