package cn.itcast.cloud.domain;

import java.util.List;
/**
 * page集合对象
 * @author Administrator
 *
 * @param <T>
 */
public class PageData<T> {
	
	private List<T> data;//list集合
	
	private long recordsTotal;//list集合数量
	
	public PageData(){}
	
	public PageData(List<T> data){
		this.recordsTotal = data.size();
		this.data = data;
	}

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}

	public long getRecordsTotal() {
		return recordsTotal;
	}

	public void setRecordsTotal(long recordsTotal) {
		this.recordsTotal = recordsTotal;
	}

}
