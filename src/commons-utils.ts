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

const shuffle = (arr:any) => {
    for (let i = arr.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    }
    return arr;
}

const randomArray = (length:number, max:number) => [...new Array(length)].map((_, i) => Math.round(Math.random() * max));


const removeItemInArray = (arr:any,key:any) => {
	var index = arr.indexOf(key, 0);
	if (index > -1) {
   		arr.splice(index, 1);
	}
	return arr;
};