package cn.itcast.cloud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.itcast.cloud.dao.MenuDao;
import cn.itcast.cloud.domain.Menu;

@Service
public class MenuServiceImpl implements MenuService {

	@Autowired
    private MenuDao menuDao;
	/**
	 * 查看一级菜单
	 */
	public List<Menu> findPrimaryMenu() {
		List<Menu> menuList= menuDao.findPrimaryMenu();
		return menuList;
	}
	/**
	 * 查看一级菜单的二级菜单
	 */
	public List<Menu> findSecondaryMenu(Long parentId) {
		return menuDao.findByParentId(parentId);
	}
}
