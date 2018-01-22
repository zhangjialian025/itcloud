package cn.itcast.cloud.resource;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;

import cn.itcast.cloud.domain.Menu;
import cn.itcast.cloud.service.MenuService;

@Path("menu")
public class MenuResource {

	@Autowired
	private MenuService menuService;
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public List<Menu> listPriMenu(){
		return menuService.findPrimaryMenu();
	}
	
	@GET
	@Path("{pid}")
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public List<Menu> listSecMenu(@PathParam("pid") Long pid){
		return menuService.findSecondaryMenu(pid);
	}
}
