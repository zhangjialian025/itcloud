package cn.itcast.cloud.resource;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;

import cn.itcast.cloud.domain.LocationInfo;
import cn.itcast.cloud.service.LocationInfoService;

@Path("location")
public class LocationInfoResource {

	@Autowired
	private LocationInfoService locationInfoService;
		
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public List<LocationInfo> show(){	
		return locationInfoService.findAll();
	}
	
}
