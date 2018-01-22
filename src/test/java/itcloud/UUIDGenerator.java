package itcloud;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

public class UUIDGenerator {

	public static void main(String[] args) {
		Set<String> set = new HashSet<String>();
		
		int i = 0;
		boolean flag = true;
		while(flag){
			String uuid = UUID.randomUUID().toString();
			String code = uuid.split("-")[0].toUpperCase();
			set.add(code);
			i++;
			if(set.size() == 50000){
				flag = false;
			}
		}
		int j = 0;
		for(String u:set){
			j++;
		}
	}

}
