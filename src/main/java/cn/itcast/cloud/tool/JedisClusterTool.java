package cn.itcast.cloud.tool;

import java.io.IOException;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.junit.Test;

import redis.clients.jedis.BinaryJedisCluster;
import redis.clients.jedis.HostAndPort;

public class JedisClusterTool {
	private static BinaryJedisCluster jc;  
	  static {  
	       //只给集群里一个实例就可以  
	        Set<HostAndPort> jedisClusterNodes = new HashSet<HostAndPort>();  
	        jedisClusterNodes.add(new HostAndPort("192.168.0.21", 6378));  
	        jedisClusterNodes.add(new HostAndPort("192.168.0.21", 6379));  
	        jedisClusterNodes.add(new HostAndPort("192.168.0.22", 6378));  
	        jedisClusterNodes.add(new HostAndPort("192.168.0.22", 6379));  
	        jedisClusterNodes.add(new HostAndPort("192.168.0.23", 6378));  
	        jedisClusterNodes.add(new HostAndPort("192.168.0.23", 6379));  
	        
	        jc = new BinaryJedisCluster(jedisClusterNodes);  
	    }  
	

}	
