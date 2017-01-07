const easifyarray = (arr:any) => {
	const proxy = new Proxy(arr, {  
  		get(target, name) {
    		if(name in target) return Reflect.get(target,name);
    		const index = Number(name);
    		return Reflect.get(target, target.length + index);
  		}
	});
	return proxy;

}

