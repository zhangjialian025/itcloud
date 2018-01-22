package cn.itcast.cloud.domain;

import java.util.Date;
/**
 * 本地信息对象
 * @author Administrator
 *
 */
public class LocationInfo {

	private Long id;
	
	private Date logDate;
	
	private String name;
	
	private Integer value;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getLogDate() {
		return logDate;
	}

	public void setLogDate(Date logDate) {
		this.logDate = logDate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
	}

}
