/*
* @Author: lipan
* @Date:   2020-09-09 22:11:49
* @Last Modified by:   李盼和岳聪
* @Last Modified time: 2020-09-09 22:39:35
*/

let module=(function(){
	let moduleList={};
	function define(name,options,func){
		options.map((m,i)=>{
			options[i]=moduleList[m]
		})
		moduleList[name]=func.apply(null,options);
		return moduleList[name];

	}
	return {define}
})();

//1.模块的定义
module.define('pk4',[],function(){
	return {
		age:24
	}
});

//2.模块的导出



//3.模块的导入


//4.模块的依赖

let hd=module.define('hd',['pk4'],function(pk4){
	return {
		a:pk4.age
	}
});
console.log(hd);