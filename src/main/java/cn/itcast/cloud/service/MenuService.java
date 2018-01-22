package cn.itcast.cloud.service;


import java.util.List;

import cn.itcast.cloud.domain.Menu;

public interface MenuService {

	List<Menu> findPrimaryMenu();

	List<Menu> findSecondaryMenu(Long parentId);

	
}
